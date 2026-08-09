import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

interface DestinoDetalhePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return destinos.map((destino) => ({ id: destino.id }));
}

export async function generateMetadata({ params }: DestinoDetalhePageProps) {
  const { id } = await params;
  const destino = destinos.find((d) => d.id === id);

  if (!destino) {
    return { title: "Destino não encontrado | ViajaJá" };
  }

  return {
    title: `${destino.nome} | ViajaJá`,
    description: destino.descricao,
  };
}

export default async function DestinoDetalhePage({
  params,
}: DestinoDetalhePageProps) {
  const { id } = await params;
  const destino = destinos.find((d) => d.id === id);

  if (!destino) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <div className={styles.imageWrapper}>
        <Image
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          fill
          sizes="100vw"
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.content}>
        <Link href="/destinos" className={styles.backLink}>
          ← Voltar para destinos
        </Link>

        <h1 className={styles.title}>{destino.nome}</h1>
        <p className={styles.pais}>{destino.pais}</p>

        <p className={styles.descricaoCompleta}>{destino.descricaoCompleta}</p>

        <div className={styles.infoBox}>
          <span className={styles.infoLabel}>Preço estimado</span>
          <span className={styles.infoValue}>{destino.preco}</span>
        </div>
      </div>
    </article>
  );
}
