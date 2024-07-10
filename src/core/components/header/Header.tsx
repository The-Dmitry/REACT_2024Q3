import { memo } from 'react'
import Button from '../../../shared/components/button/Button'
import styles from './header.module.css'
import UseSaveQuery from '../../../shared/hooks/useSaveQuery'

type HeaderProps = {
  submit: (value: string) => void
}

const Header = memo(({ submit }: HeaderProps) => {
  const [value, setValue] = UseSaveQuery()

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
