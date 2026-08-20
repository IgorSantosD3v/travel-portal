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
        <span className={styles.code}>{destino.codigo}</span>
      </div>

      <div className={styles.perforation} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h3 className={styles.nome}>{destino.nome}</h3>
          <span className={styles.pais}>{destino.pais}</span>
        </div>
        <p className={styles.descricao}>{destino.descricao}</p>
        <span className={styles.link}>
          Ver detalhes <span className={styles.linkArrow}>→</span>
        </span>
      </div>
    </Link>
  );
}
