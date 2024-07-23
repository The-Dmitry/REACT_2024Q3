import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  warning: boolean
}

export default function Button({ children, warning = false, ...rest }: Props) {
  const handler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
  }
  return (
    <button
      className={`${styles.button} ${warning ? styles.warning : ''}`}
      onClick={handler}
      {...rest}
    >
      {children}
    </button>
  )
}
