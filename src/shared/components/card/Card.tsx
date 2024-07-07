import styles from "./card.module.css";
import CardData from "../../../models/CardData";
import { useSearchParams } from "react-router-dom";

export default function Card({
  name,
  gender,
  eye_color,
  height,
  url,
}: CardData) {
  const setSearchParams = useSearchParams()[1];
  const id = url.replace(/[^\d]/g, "");
  const src = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  const openDetails = () => {
    setSearchParams((params) => {
      params.set("details", id);
      return params;
    });
  };
  return (
    <li className={styles.card} onClick={openDetails}>
      <img className={styles.image} src={src} alt={name} />
      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>Yey color: {eye_color}</p>
      <p>Height: {height}</p>
    </li>
  );
}
