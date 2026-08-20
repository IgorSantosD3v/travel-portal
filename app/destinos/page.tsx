import { destinos } from "@/data/destinos";
import CardDestino from "@/components/CardDestino/CardDestino";
import styles from "./page.module.css";

export const metadata = {
  title: "Destinos | ViajaJá",
  description: "Confira nossa lista de destinos turísticos disponíveis.",
};

export default function DestinosPage() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          {destinos.length} destinos disponíveis
        </span>
        <h1 className={styles.title}>Nossos Destinos</h1>
        <p className={styles.subtitle}>
          Escolha um destino abaixo e veja informações completas para
          planejar sua viagem.
        </p>
      </div>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}
