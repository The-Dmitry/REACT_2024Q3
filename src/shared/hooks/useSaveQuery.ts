import { useEffect, useRef, useState } from 'react'

const LS_KEY = 'MY_COOL_UNIQ_KEY'

export default function UseSaveQuery(): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] {
  const [value, setValue] = useState<string>(localStorage[LS_KEY] || '')
  const valueToSave = useRef(value)

  useEffect(() => {
    valueToSave.current = value
  }, [value])

  useEffect(() => {
    const saveValue = (ref: React.MutableRefObject<string>) => {
      localStorage.setItem(LS_KEY, ref.current)
    }
    return () => saveValue(valueToSave)
  })

  return [value, setValue]
}
