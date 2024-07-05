import styles from "./card.module.css";
import CardData from "../../../models/CardData";

export default function Card({
  name,
  gender,
  eye_color,
  height,
  url,
}: CardData) {
  const id = url.replace(/[^\d]/g, "");
  const src = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  return (
    <li className={styles.card}>
      <img className={styles.image} src={src} alt={name} />
      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>Yey color: {eye_color}</p>
      <p>Height: {height}</p>
    </li>
  );
}
