import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...rest }: Props) {
  const handler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
  }
  return (
    <button className={styles.button} onClick={handler} {...rest}>
      {children}
    </button>
  )
}
