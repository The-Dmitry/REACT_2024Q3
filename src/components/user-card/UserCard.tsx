import UserCardData from '@models/UserCardData'
import styles from './UserCard.module.css'

const NEW_CARD_TIME = 5000

export default function UserCard({ cardData }: { cardData: UserCardData }) {
  return (
    <article
      className={`${styles.card} ${Date.now() - cardData.time <= NEW_CARD_TIME ? styles.new : ''}`}
    >
      <img src={cardData.picture} className={styles.image} alt="Picture"></img>
      <p className={styles.row}>
        <span>Name:</span> {cardData.name}
      </p>
      <p className={styles.row}>
        <span>Age:</span> {cardData.age}
      </p>
      <p className={styles.row}>
        <span>Email:</span> {cardData.email}
      </p>
      <p className={styles.row}>
        <span>Country:</span> {cardData.country}
      </p>
      <p className={styles.row}>
        <span>Gender:</span> {cardData.gender}
      </p>
      <p className={styles.row}>
        <span>Password:</span> {cardData.password}
      </p>
      <p className={styles.row}>
        <span>Terms:</span> {cardData.terms ? 'Accepted' : 'Not accepted'}
      </p>
    </article>
  )
}
