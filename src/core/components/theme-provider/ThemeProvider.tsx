import styles from './ThemeProvider.module.css'
import { ReactNode, useState, useCallback } from 'react'
import { Theme, ThemeContext } from '../../context/ThemeContext'

export default function ThemeProvider({
  children,
}: {
  children: ReactNode | ReactNode[]
}) {
  const [theme, setTheme] = useState<Theme>('light')

  const handleTheme = useCallback(
    () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    []
  )

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div className={`${styles.wrapper} ${styles[theme]}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
