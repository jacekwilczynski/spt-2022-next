import { ReactNode } from 'react'
import styles from './Main.module.scss'

export const Main = (props: { children: ReactNode }) => (
  <main className={styles.root}>{props.children}</main>
)
