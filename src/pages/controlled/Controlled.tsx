import { useForm } from 'react-hook-form'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import UserForm from '@components/user-form/UserForm'
import formSchema from '@utils/validation'
import ErrorsList from '@models/ErrorsList'
import FormResult from '@models/FormResult'

export default function Controlled() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'all',
  })
  const onSubmit = (data: FormResult) => {
    console.log(data)
  }
  const errorsList = Object.entries(errors).reduce(
    (acc, [name, { message }]) => ({ ...acc, [name]: { message } }),
    {} as ErrorsList
  )

  return (
    <UserForm
      errors={errorsList}
      submitFunc={handleSubmit(onSubmit)}
      register={register as unknown as UseFormRegister<FieldValues>}
      disableSubmit={!isValid}
    />
  )
}
