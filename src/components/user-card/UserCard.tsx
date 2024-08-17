import UserCardData from '@models/UserCardData'

export default function UserCard(cardData: UserCardData) {
  return (
    <div>
      <img src={cardData.picture} alt="Picture"></img>
      <p>name {cardData.name}</p>
      <p>age {cardData.age}</p>
      <p>age {cardData.age}</p>
      <p>email {cardData.email}</p>
    </div>
  )
}
