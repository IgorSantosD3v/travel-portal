import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Descubra o mundo com o <span>ViajaJá</span>
        </h1>
        <p className={styles.subtitle}>
          Seu portal de viagens para conhecer destinos incríveis ao redor do
          planeta. Explore praias paradisíacas, cidades históricas e
          paisagens de tirar o fôlego, tudo em um só lugar.
        </p>
        <Link href="/destinos" className={styles.cta}>
          Ver destinos disponíveis
        </Link>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <span className={styles.icon}>🌎</span>
          <h3>Destinos selecionados</h3>
          <p>Uma curadoria de lugares incríveis para você se inspirar.</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>📍</span>
          <h3>Informações detalhadas</h3>
          <p>Descrições completas para planejar sua próxima aventura.</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>💸</span>
          <h3>Preços de referência</h3>
          <p>Tenha uma ideia inicial de orçamento para cada viagem.</p>
        </div>
      </div>
    </section>
  );
}
