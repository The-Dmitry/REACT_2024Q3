import Button from '@shared/components/button/Button'
import ThemeCheckbox from '@shared/components/theme-checkbox/ThemeCheckbox'
import styles from './header.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [value, setValue] = useState('')

  const submit = () => {
    router.push({ query: { ...router.query, search: value } })
  }

  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        type="search"
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <Button warning={false} onClick={submit}>
        Search
      </Button>
      <ThemeCheckbox />
    </header>
  )
}

export default Header
