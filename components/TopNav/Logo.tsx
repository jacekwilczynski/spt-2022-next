import { Image } from '@/components/Image'
import Link from 'next/link'
import styles from './Logo.module.scss'

export const Logo = () => (
  <Link href="/" className="d-block">
    <Image
      name="logo-white"
      alt="Strona główna"
      className={styles['img']}
    />
  </Link>
)
