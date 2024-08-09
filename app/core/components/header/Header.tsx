import { useEffect, useState } from 'react'
import Button from '~/shared/components/button/Button'
import ThemeCheckbox from '~/shared/components/theme-checkbox/ThemeCheckbox'
import { useSearchParams } from '@remix-run/react'
import styles from './header.module.css'

const Header = () => {
  const [value, setValue] = useState<string>('')
  const [params, setParams] = useSearchParams()

  useEffect(() => {
    const val = params.get('search')
    val && setValue(val)
  }, [params])

  const submit = () => {
    setParams((prev) => {
      prev.set('page', '1')
      prev.set('search', value.trim())
      return prev
    })
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
