import { Link } from 'react-router-dom'
import { AnchorHTMLAttributes } from 'react'
import styles from './button.module.css'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

export default function ButtonLink({ children, to }: Props) {
  return (
    <Link className={styles.button} to={to}>
      {children}
    </Link>
  )
}
