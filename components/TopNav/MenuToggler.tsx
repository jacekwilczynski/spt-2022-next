import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MenuToggler.module.scss'

export const MenuToggler = (props: JSX.IntrinsicElements['button']) => (
  <div className={styles.root}>
    <button
      className={styles.button}
      aria-haspopup={true}
      {...props}
    >
      <FontAwesomeIcon icon={faBars} className={styles.icon}/>
      Menu
    </button>
  </div>
)
