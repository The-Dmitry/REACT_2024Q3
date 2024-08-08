import { useState } from 'react'
import styles from './header.module.css'
import Button from '~/shared/components/button/Button'
import ThemeCheckbox from '~/shared/components/theme-checkbox/ThemeCheckbox'

const Header = () => {
  // const router = useRouter()
  const [value, setValue] = useState<string>('')

  // useEffect(() => {
  //   const obj = { ...router.query }
  //   if ('search' in obj && typeof obj['search'] === 'string') {
  //     setValue(obj['search'])
  //   }
  // }, [router.query])

  // const setNewSearch = () => {
  //   setParams('1', 'page')
  //   dispatch(setWord(value))
  // }

  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        type="search"
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <Button warning={false} onClick={() => {}}>
        Search
      </Button>
      <ThemeCheckbox />
    </header>
  )
}

export default Header
