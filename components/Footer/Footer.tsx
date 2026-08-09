import styles from "./Footer.module.css";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {anoAtual} ViajaJá — Portal de Viagens. Todos os direitos reservados.</p>
        <p className={styles.subtext}>Feito com Next.js e muito ☕</p>
      </div>
    </footer>
  );
}
