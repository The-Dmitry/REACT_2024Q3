import formSchema from '@utils/validation'

type ErrorsList = Partial<
  Record<keyof typeof formSchema.fields, { message: string | undefined }>
>

export default ErrorsList
