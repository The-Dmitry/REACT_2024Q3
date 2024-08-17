import { addUser } from '@redux/slice/users-slice'
import { useAppDispatch } from '@redux/store'
import convertTo64 from '@utils/convertTo64'
import formSchema from '@utils/validation'
import { useNavigate } from 'react-router'
import { InferType } from 'yup'

export default function useSaveCard() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const saveCard = async (data: InferType<typeof formSchema>) => {
    const picture =
      data.picture instanceof File ? await convertTo64(data.picture) : ''
    const result = {
      ...data,
      picture,
    }
    dispatch(addUser(result))
    navigate('/')
  }

  return saveCard
}
