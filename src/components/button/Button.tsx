import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...rest }: Props) {
  return (
    <button className={`${styles.button} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  )
}
