import { Routes } from '@router/router'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const setActiveStatus = ({ isActive }: { isActive: boolean }) =>
  `${styles.link} ${isActive ? styles.active : ''}`

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLink className={setActiveStatus} to={Routes.MAIN}>
          Main
        </NavLink>
        <NavLink className={setActiveStatus} to={Routes.CONTROLLED}>
          Controlled form
        </NavLink>
        <NavLink className={setActiveStatus} to={Routes.UNCONTROLLED}>
          Uncontrolled form
        </NavLink>
      </nav>
    </header>
  )
}
