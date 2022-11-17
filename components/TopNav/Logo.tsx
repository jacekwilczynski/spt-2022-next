import Link from 'next/link'
import styles from './Logo.module.scss'

export const Logo = () => (
  <Link href="/" className="d-block">
    <img
      src="/images/logo-white.jpg"
      alt="Strona główna"
      className={styles.img}
    />
  </Link>
)
