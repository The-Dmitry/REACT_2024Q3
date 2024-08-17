import { useState } from 'react'
import UserForm from '@components/user-form/UserForm'
import ErrorsList from '@models/ErrorsList'
import formSchema from '@utils/validation'
import useSaveCard from '@hooks/useSaveCard'
import * as yup from 'yup'

export default function Uncontrolled() {
  const [currentErrors, setCurrentErrors] = useState<ErrorsList>({})
  const saveCards = useSaveCard()

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    )
    const data = { ...formData, terms: 'terms' in formData }

    try {
      const res = formSchema.validateSync(data, { abortEarly: false })
      saveCards(res)
    } catch (error: unknown) {
      if (error instanceof yup.ValidationError) {
        const errorsList = error.inner.reduce(
          (acc, { path, message }) =>
            path ? { [path]: { message }, ...acc } : acc,
          {} as Record<string, { message: string }>
        )
        setCurrentErrors(errorsList)
      }
    }
  }

  return <UserForm errors={currentErrors} submitFunc={onSubmit} />
}
