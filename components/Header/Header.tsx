import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>✈</span>
          <span className={styles.logoText}>
            Viaja<em>Já</em>
          </span>
        </Link>
        <nav aria-label="Navegação principal">
          <ul className={styles.nav}>
            <li>
              <Link href="/" className={styles.navLink}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/destinos" className={styles.navLink}>
                Destinos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
