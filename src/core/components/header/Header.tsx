import { memo, useState } from 'react'
import Button from '../../../shared/components/button/Button'
import styles from './header.module.css'

type HeaderProps = {
  submit: (value: string) => void
  getValueFromLS: () => string
}

const Header = memo(({ submit, getValueFromLS }: HeaderProps) => {
  const [value, setValue] = useState(getValueFromLS())

  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <Button onClick={() => submit(value)}>Search</Button>
    </header>
  )
})

export default Header
