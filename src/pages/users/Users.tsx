import { useAppSelector } from '@redux/store'
import styles from './Users.module.css'
import UserCard from '@components/user-card/UserCard'

export default function Users() {
  const cards = useAppSelector((state) => state.users)
  return (
    <section className={styles.page}>
      {cards.map((data) => (
        <UserCard key={data.name} cardData={data} />
      ))}
    </section>
  )
}
