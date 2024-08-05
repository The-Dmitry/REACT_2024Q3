'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import ThemeCheckbox from '@shared/components/theme-checkbox/ThemeCheckbox'
import LinkWithQuery from '@shared/components/link-with-query/LinkWithQuery'
import styles from './header.module.css'

const Header = () => {
  const [value, setValue] = useState<string>('')
  const params = useSearchParams()

  useEffect(() => {
    setValue(params?.get('search') || '')
  }, [params])

  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        type="search"
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <LinkWithQuery query={{ search: value.trim(), page: '1' }}>
        Submit
      </LinkWithQuery>
      <ThemeCheckbox />
    </header>
  )
}

export default Header
