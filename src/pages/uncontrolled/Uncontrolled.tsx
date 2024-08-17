import { useAppSelector } from '@redux/store'
import formSchema from '@utils/validation'
import styles from '../controlled/Controlled.module.css'
import Form from '@components/form/Form'
import * as yup from 'yup'
import { useState } from 'react'
import ErrorsList from '@models/ErrorsList'
import UserForm from '@components/user-form/UserForm'

export default function Uncontrolled() {
  const countries = useAppSelector((state) => state.countries)
  const [currentErrors, setCurrentErrors] = useState<ErrorsList>({})

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    )
    const data = {
      ...formData,
      terms: 'terms' in formData,
    }

    try {
      formSchema.validateSync(data, { abortEarly: false })
    } catch (error: unknown) {
      if (error instanceof yup.ValidationError) {
        const errorsList = error.inner.reduce(
          (acc, { path, message }) =>
            path ? { [path]: { message }, ...acc } : acc,
          {} as Record<string, { message: string }>
        )

        console.log(data)
        setCurrentErrors(errorsList)
      }
    }
  }

  return <UserForm errors={currentErrors} submitFunc={onSubmit} />

  return (
    // <Form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
    <Form className={styles.form} onSubmit={onSubmit} noValidate>
      <Form.Text
        id="name"
        type="text"
        title="Name"
        message={currentErrors?.name?.message}
        name="name"
        // validation={register('name')}
      />
      <Form.Text
        id="age"
        type="number"
        title="Age"
        min={0}
        message={currentErrors?.age?.message}
        name="age"
        // validation={{ ...register('age') }}
      />
      <Form.Text
        id="email"
        type="email"
        title="Email"
        name="email"
        message={currentErrors?.email?.message}
      />
      <Form.Text
        id="password"
        type="password"
        title="Password"
        name="password"
        message={currentErrors?.password?.message}
      />
      <Form.Text
        id="confirm-password"
        type="password"
        title="Confirm Password"
        // validation={register('confirm-password')}
        name="confirm-password"
        message={currentErrors?.['confirm-password']?.message}
      />
      <Form.Field
        title="Gender"
        className={styles.gender}
        message={currentErrors?.gender?.message}
      >
        <Form.Radio
          id="male"
          title="Male"
          name="gender"
          // validation={register('gender')}
        />
        <Form.Radio
          id="female"
          title="Female"
          name="gender"
          // validation={register('gender')}
        />
      </Form.Field>
      <Form.Field message={currentErrors?.terms?.message}>
        <Form.CheckBox
          id="terms"
          title="I accept the Terms and Conditions"
          name="terms"
        />
      </Form.Field>
      <Form.File
        id="file"
        name="picture"
        message={currentErrors?.picture?.message}
      />
      <Form.Autocomplete
        id="country"
        dataList={countries}
        placeholder="Select your country"
        name="country"
        message={currentErrors?.country?.message}
      />
      <button type="submit">Sumbit</button>
    </Form>
  )
}
