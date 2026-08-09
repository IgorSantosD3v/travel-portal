import Image from "next/image";
import Link from "next/link";
import { Destino } from "@/types/destino";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <Link href={`/destinos/${destino.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.nome}>{destino.nome}</h3>
        <p className={styles.pais}>{destino.pais}</p>
        <p className={styles.descricao}>{destino.descricao}</p>
        <span className={styles.link}>Ver detalhes →</span>
      </div>
    </Link>
  );
}
