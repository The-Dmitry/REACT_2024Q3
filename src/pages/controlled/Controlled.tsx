import Form from '@components/form/Form'
import { useForm } from 'react-hook-form'
import styles from './Controlled.module.css'

export default function Controlled() {
  const { handleSubmit } = useForm()
  const onSubmit = () => {}
  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Form.Text id="name" type="text" title="Name" />
      <Form.Text id="age" type="number" min={0} title="Age" />
      <Form.Text id="email" type="email" title="Email" />
      <Form.Text id="password" type="password" title="Password" />
      <Form.Text
        id="confirm-password"
        type="password"
        title="Confirm Password"
      />
      <Form.Field title="Gender" className={styles.gender}>
        <Form.Radio id="male" title="Male" name="gender" checked />
        <Form.Radio id="female" title="Female" name="gender" />
      </Form.Field>
      <Form.CheckBox id="terms" title="I accept the Terms and Conditions" />
      <Form.File id="file" title=";" />
    </Form>
  )
}
