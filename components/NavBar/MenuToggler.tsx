import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MenuToggler.module.scss'

export const MenuToggler = (props: { onClick: () => void }) => (
  <div className={styles.root}>
    <button className={styles.button} onClick={props.onClick}>
      <FontAwesomeIcon icon={faBars}/>
      &nbsp;MENU
    </button>
  </div>
)
