import Form from '@components/form/Form'
import { useForm } from 'react-hook-form'
import styles from './Controlled.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppSelector } from '@redux/store'
import formSchema from '@utils/validation'
import UserForm from '@components/user-form/UserForm'
import ErrorsList from '@models/ErrorsList'
import { UseFormRegister, FieldValues } from 'react-hook-form'

export default function Controlled() {
  const countries = useAppSelector((state) => state.countries)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'all',
  })
  const onSubmit = (data: unknown) => {
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
    />
  )

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* <UserForm errors={errors}></UserForm> */}
      <Form.Text
        id="name"
        type="text"
        title="Name"
        message={errorsList.name?.message}
        validation={register('name')}
      />
      <Form.Text
        id="age"
        type="number"
        title="Age"
        min={0}
        message={errorsList.age?.message}
        validation={register('age')}
      />
      <Form.Text
        id="email"
        type="email"
        title="Email"
        validation={register('email')}
        message={errorsList.email?.message}
      />
      <Form.Text
        id="password"
        type="password"
        title="Password"
        validation={register('password')}
        message={errorsList.password?.message}
      />
      <Form.Text
        id="confirm-password"
        type="password"
        title="Confirm Password"
        validation={register('confirm-password')}
        message={errorsList['confirm-password']?.message}
      />
      <Form.Field
        title="Gender"
        className={styles.gender}
        message={errorsList.gender?.message}
      >
        <Form.Radio
          id="male"
          title="Male"
          name="gender"
          validation={register('gender')}
        />
        <Form.Radio
          id="female"
          title="Female"
          name="gender"
          validation={register('gender')}
        />
      </Form.Field>
      <Form.Field message={errorsList.terms?.message}>
        <Form.CheckBox
          id="terms"
          title="I accept the Terms and Conditions"
          validation={register('terms')}
        />
      </Form.Field>
      <Form.File
        id="file"
        validation={register('picture')}
        message={errorsList.picture?.message}
      />
      <Form.Autocomplete
        id="country"
        dataList={countries}
        placeholder="Select your country"
        validation={register('country')}
        message={errorsList.country?.message}
      />
      <button type="submit">Sumbit</button>
    </Form>
  )
}
