import formSchema from '@utils/validation'
import * as yup from 'yup'
import { useState } from 'react'
import ErrorsList from '@models/ErrorsList'
import UserForm from '@components/user-form/UserForm'

export default function Uncontrolled() {
  const [currentErrors, setCurrentErrors] = useState<ErrorsList>({})
  console.log('render')

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    )
    const data = { ...formData, terms: 'terms' in formData }

    try {
      formSchema.validateSync(data, { abortEarly: false })
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
