import countries from '@data/country-list'
import * as yup from 'yup'

const FILE_SIZE = 5 * 1024 * 1024

const IMG_FORMATS = ['image/jpeg', 'image/png']

const formSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter')
    .required('Name is required'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Age is required'),
  email: yup
    .string()
    .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    ),
  'confirm-password': yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm password is required'),
  gender: yup.string().required('Gender is required'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
  picture: yup
    .mixed()
    .required('Profile picture is required')
    .transform((value) => {
      return value instanceof FileList ? value[0] : value
    })
    .test(
      'fileExists',
      'Profile picture is required',
      (value) => value && value instanceof File && !!value.size
    )
    .test('fileSize', 'File too large', (value) => {
      return value && value instanceof File && value.size <= FILE_SIZE
    })
    .test(
      'fileFormat',
      'The file must be in PNG or JPEG format.',
      (value) =>
        value && value instanceof File && IMG_FORMATS.includes(value.type)
    ),
  country: yup
    .string()
    .required('Country is required')
    .test('Predefined country', 'Country not found in the list', (value) =>
      countries.some((item) => item.toLowerCase() === value.toLowerCase())
    ),
})

export default formSchema
