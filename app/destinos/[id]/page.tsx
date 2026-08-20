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
    <article className={styles.wrapper}>
      <Link href="/destinos" className={styles.backLink}>
        ← Voltar para destinos
      </Link>

      <div className={styles.ticket}>
        <div className={styles.imageWrapper}>
          <Image
            src={destino.imagem}
            alt={`Foto de ${destino.nome}`}
            fill
            sizes="100vw"
            className={styles.image}
            priority
          />
          <div className={styles.imageOverlay} />
          <span className={styles.code}>{destino.codigo}</span>
          <div className={styles.imageCaption}>
            <span className={styles.pais}>{destino.pais}</span>
            <h1 className={styles.title}>{destino.nome}</h1>
          </div>
        </div>

        <div className={styles.perforation} aria-hidden="true" />

        <div className={styles.stub}>
          <div className={styles.route}>
            <div className={styles.routePoint}>
              <span className={styles.routeLabel}>De</span>
              <span className={styles.routeCode}>VJJ</span>
              <span className={styles.routeName}>ViajaJá</span>
            </div>
            <span className={styles.routeArrow} aria-hidden="true">
              ✈
            </span>
            <div className={styles.routePoint}>
              <span className={styles.routeLabel}>Para</span>
              <span className={styles.routeCode}>{destino.codigo}</span>
              <span className={styles.routeName}>{destino.nome}</span>
            </div>
          </div>

          <p className={styles.descricaoCompleta}>
            {destino.descricaoCompleta}
          </p>

          <div className={styles.infoBox}>
            <span className={styles.infoLabel}>Preço estimado</span>
            <span className={styles.infoValue}>{destino.preco}</span>
          </div>

          <div className={styles.barcode} aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}
