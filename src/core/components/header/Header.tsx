import { useState } from 'react'
import Button from '../../../shared/components/button/Button'
import styles from './header.module.css'
import { setWord } from '../../../redux/slice/search-slice'
import { useAppDispatch } from '../../../shared/hooks/storeHooks'
import UseQueryParams from '../../../shared/hooks/useQueryParams'

const Header = () => {
  const { setParams } = UseQueryParams()
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const setNewSearch = () => {
    setParams('1', 'page')
    dispatch(setWord(value))
  }

  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        type="search"
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <Button onClick={setNewSearch}>Search</Button>
    </header>
  )
}

export default Header
