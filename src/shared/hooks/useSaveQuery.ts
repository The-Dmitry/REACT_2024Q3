// import { useCallback, useEffect, useState } from 'react'

// export default function UseWordStorage(): [
//   string,
//   React.Dispatch<React.SetStateAction<string>>,
//   () => string,
// ] {
//   const [value, setValue] = useState<string>(localStorage[LS_KEY] || '')

//   useEffect(() => {
//     localStorage.setItem(LS_KEY, value)
//   }, [value])

//   const getValueFromLS = useCallback(() => {
//     return value
//   }, [value])

//   return [value, setValue, getValueFromLS]
// }
