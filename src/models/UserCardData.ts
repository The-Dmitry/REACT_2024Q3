import FormResult from './FormResult'

export default interface UserCardData extends Omit<FormResult, 'picture'> {
  picture: string
  time: number
}
