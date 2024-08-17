import { useForm } from 'react-hook-form'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import UserForm from '@components/user-form/UserForm'
import formSchema from '@utils/validation'
import ErrorsList from '@models/ErrorsList'
import useSaveCard from '@hooks/useSaveCard'
import { InferType } from 'yup'

export default function Controlled() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'all',
  })
  const saveCard = useSaveCard()
  const onSubmit = (data: InferType<typeof formSchema>) => saveCard(data)

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
