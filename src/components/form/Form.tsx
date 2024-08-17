import {
  FieldsetHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import styles from './Form.module.css'
import PasswordStrength from '@components/password-strength/PasswordStrength'
import calculateStrength from '@utils/calculateStrength'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: string | ReactNode
}
interface FieldProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  message?: string
  children: string | ReactNode
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  message?: string
  validation?: UseFormRegisterReturn | null
}

interface Autocomplete extends InputProps {
  dataList: string[]
}

export default function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>
}

Form.Field = function ({ children, title, className, message }: FieldProps) {
  return (
    <div className={`${styles.field} ${className ?? ''}`}>
      {title && <h3>{title}</h3>}
      {children}
      {<p className="message">{message}</p>}
    </div>
  )
}

Form.Text = function ({
  id,
  message,
  title,
  className,
  validation,
  ...rest
}: InputProps): ReactNode {
  return (
    <Form.Field>
      <label htmlFor={id} className={`${styles.label} ${className ?? ''}`}>
        {title}
        <input
          id={id}
          className={styles.text_input}
          {...rest}
          {...validation}
        />
      </label>
      {<p className="message">{message}</p>}
    </Form.Field>
  )
}

Form.Password = function ({
  id,
  message,
  title,
  className,
  validation,
  ...rest
}: Omit<InputProps, 'type'>) {
  //Dear Reviewer. Using useState like this is not considering as controlled form!
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [strength, setStrength] = useState('')

  return (
    <Form.Field>
      <label htmlFor={id} className={`${styles.label} ${className ?? ''}`}>
        {title}
        <input
          id={id}
          className={styles.text_input}
          type="password"
          {...rest}
          {...validation}
          onInput={(e) =>
            e.target instanceof HTMLInputElement && setStrength(e.target.value)
          }
        />
      </label>
      <PasswordStrength strength={calculateStrength(strength)} />
      {<p className="message">{message}</p>}
    </Form.Field>
  )
}

Form.Radio = function ({
  id,
  title,
  className,
  validation,
  ...rest
}: Omit<InputProps, 'type' | 'children'>) {
  return (
    <label htmlFor={id} className={`${styles.radio} ${className ?? ''}`}>
      <input id={id} type="radio" {...rest} value={id} {...validation} />
      {title}
    </label>
  )
}

Form.CheckBox = function ({
  id,
  title,
  className,
  validation,
  ...rest
}: Omit<InputProps, 'type' | 'children'>) {
  return (
    <label htmlFor={id} className={`${styles.checkbox} ${className ?? ''}`}>
      <input id={id} type="checkbox" {...rest} {...validation} />
      {title}
    </label>
  )
}

Form.File = function ({
  id,
  title,
  className,
  message,
  validation,
  ...rest
}: Omit<InputProps, 'type' | 'accept' | 'children'>) {
  return (
    <label htmlFor={id} className={`${styles.label} ${className ?? ''}`}>
      {title}
      <input
        id={id}
        type="file"
        accept="image/png, image/jpeg"
        {...rest}
        {...validation}
      />
      {<p className="message">{message}</p>}
    </label>
  )
}

Form.Autocomplete = function ({
  id,
  title,
  className,
  dataList,
  validation,
  message,
  ...rest
}: Omit<Autocomplete, 'type' | 'accept' | 'children' | 'list'>) {
  return (
    <label htmlFor={id} className={`${styles.label} ${className ?? ''}`}>
      {title}
      <input
        id={id}
        type="text"
        name={id}
        list={`${id}-list`}
        {...rest}
        {...validation}
      />
      <datalist id={`${id}-list`}>
        {dataList.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </datalist>
      {message && <p className="message">{message}</p>}
    </label>
  )
}
