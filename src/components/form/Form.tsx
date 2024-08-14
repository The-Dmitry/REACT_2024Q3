import {
  FieldsetHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react'
import styles from './Form.module.css'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: string | ReactNode
}
interface FieldProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: string | ReactNode
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: string | ReactNode
  id: string
  title?: string
  message?: string
}

export default function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>
}

Form.Field = function ({ children, title, className }: FieldProps) {
  return (
    <div className={`${styles.field} ${className ?? ''}`}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}

Form.Text = function ({
  children,
  id,
  message,
  title,
  className,
  ...rest
}: InputProps) {
  return (
    <Form.Field>
      <label htmlFor={id} className={`${styles.label} ${className ?? ''}`}>
        {title}
        <input id={id} {...rest} />
      </label>
      {children}
      {message && <p className="message">{message}</p>}
    </Form.Field>
  )
}

Form.Radio = function ({
  id,
  title,
  className,
  ...rest
}: Omit<InputProps, 'type' | 'children'>) {
  return (
    <label htmlFor={id} className={`${styles.radio} ${className ?? ''}`}>
      <input id={id} type="radio" {...rest} value={id} />
      {title}
    </label>
  )
}

Form.CheckBox = function ({
  id,
  title,
  className,
  ...rest
}: Omit<InputProps, 'type' | 'children'>) {
  return (
    <label htmlFor={id} className={`${styles.checkbox} ${className ?? ''}`}>
      <input id={id} type="checkbox" {...rest} />
      {title}
    </label>
  )
}

Form.File = function ({
  id,
  title,
  className,
  ...rest
}: Omit<InputProps, 'type' | 'accept' | 'children'>) {
  return (
    <label htmlFor={id} className={`${styles.label} ${className ?? ''}`}>
      {title}
      <input id={id} type="file" accept="image/png, image/jpeg" {...rest} />
    </label>
  )
}

Form.Country = function ({
  id,
  title,
  className,
  ...rest
}: Omit<InputProps, 'type' | 'accept' | 'children'>) {
  return (
    <label htmlFor={id} className={`${styles.label} ${className ?? ''}`}>
      {title}
      <input id={id} type="text" name={id} {...rest} />
    </label>
  )
}
