import Form from '@components/form/Form'
import styles from './UserForm.module.css'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import ErrorsList from '@models/ErrorsList'
import { useAppSelector } from '@redux/store'
import { BaseSyntheticEvent } from 'react'
import Button from '@components/button/Button'

interface Props {
  submitFunc:
    | ((data: React.SyntheticEvent<HTMLFormElement>) => void)
    | ((
        e?: BaseSyntheticEvent<object, unknown, unknown> | undefined
      ) => Promise<void>)
  register?: UseFormRegister<FieldValues>
  errors: ErrorsList
  disableSubmit?: boolean
}

export default function UserForm({
  submitFunc,
  register,
  errors,
  disableSubmit = false,
}: Props) {
  const countries = useAppSelector((state) => state.countries)

  return (
    <Form onSubmit={submitFunc} noValidate>
      <Form.Text
        id="name"
        type="text"
        title="Name"
        message={errors?.name?.message}
        name="name"
        validation={register ? register('name') : null}
        className={styles.text}
      />
      <Form.Text
        id="age"
        type="number"
        title="Age"
        min={0}
        message={errors?.age?.message}
        name="age"
        validation={register ? register('age') : null}
      />
      <Form.Text
        id="email"
        type="email"
        title="Email"
        name="email"
        message={errors?.email?.message}
        validation={register ? register('email') : null}
      />
      <Form.Password
        id="password"
        title="Password"
        name="password"
        message={errors?.password?.message}
        validation={register ? register('password') : null}
      />
      <Form.Text
        id="confirm-password"
        type="password"
        title="Confirm Password"
        name="confirm-password"
        message={errors?.['confirm-password']?.message}
        validation={register ? register('confirm-password') : null}
      />
      <Form.Field
        title="Gender"
        className={styles.gender}
        message={errors?.gender?.message}
      >
        <Form.Radio
          id="male"
          title="Male"
          name="gender"
          validation={register ? register('gender') : null}
        />
        <Form.Radio
          id="female"
          title="Female"
          name="gender"
          validation={register ? register('gender') : null}
        />
      </Form.Field>
      <Form.Field message={errors?.terms?.message}>
        <Form.CheckBox
          id="terms"
          title="I accept the Terms and Conditions"
          name="terms"
          validation={register ? register('terms') : null}
        />
      </Form.Field>
      <Form.File
        id="file"
        name="picture"
        message={errors?.picture?.message}
        validation={register ? register('picture') : null}
      />
      <Form.Autocomplete
        id="country"
        dataList={countries}
        placeholder="Select your country"
        name="country"
        message={errors?.country?.message}
        validation={register ? register('country') : null}
      />
      <Button disabled={disableSubmit} type="submit">
        Submit
      </Button>
    </Form>
  )
}
