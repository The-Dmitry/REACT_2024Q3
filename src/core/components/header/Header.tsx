import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@shared/components/button/Button'
import ThemeCheckbox from '@shared/components/theme-checkbox/ThemeCheckbox'
import styles from './header.module.css'

const Header = () => {
  const router = useRouter()
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    const obj = { ...router.query }
    if ('search' in obj && typeof obj['search'] === 'string') {
      setValue(obj['search'])
    }
  }, [router.query])

  const submit = () => {
    const search = value.trim()
    const query = { ...router.query, page: '1' }
    if ('search' in query && search === '') {
      delete query.search
    }
    search
      ? router.push({ query: { ...query, search } })
      : router.push({ query })
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
