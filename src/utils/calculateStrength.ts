export default function (password: string) {
  return [
    password.length >= 8,
    /[0-9]/.test(password),
    /[a-z]/.test(password),
    /[A-Z]/.test(password),
    /[!@#$%^&*(),.?":{}|<>]/.test(password),
  ].filter((v) => !!v).length
}
