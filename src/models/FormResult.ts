export default interface FormResult {
  terms?: boolean | undefined
  name: string
  age: number
  email: string
  password: string
  'confirm-password': string
  gender: string
  picture: File
  country: string
}
