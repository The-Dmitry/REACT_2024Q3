import Button from '@shared/components/button/Button'
import ThemeCheckbox from '@shared/components/theme-checkbox/ThemeCheckbox'
import UseQueryParams from '@shared/hooks/useQueryParams'
import { useEffect, useState } from 'react'
import { setWord } from '@redux/slice/search-slice'
import { useAppDispatch, useAppSelector } from '@shared/hooks/storeHooks'
import styles from './header.module.css'

const Header = () => {
  const { setParams } = UseQueryParams()
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')
  const { search } = useAppSelector((state) => state.searchWord)

  const setNewSearch = () => {
    setParams('1', 'page')
    dispatch(setWord(value))
  }

  useEffect(() => {
    setValue(search)
  }, [search])

  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        type="search"
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <Button warning={false} onClick={setNewSearch}>
        Search
      </Button>
      <ThemeCheckbox />
    </header>
  )
}

export default Header
