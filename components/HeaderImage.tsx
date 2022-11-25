import { Image } from '@/components/Image'
import styles from './HeaderImage.module.scss'

export const HeaderImage = () => (
  <Image
    name="header-photo"
    alt="Zdjęcie Sali 1"
    className={styles['img']}
  />
)
