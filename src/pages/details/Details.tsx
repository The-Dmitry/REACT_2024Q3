import { useEffect, useState } from "react";
import styles from "./details.module.css";
import { useSearchParams } from "react-router-dom";
import CardData from "../../models/CardData";
import getDetails from "../../shared/utils/getDetails/getDetails";
import getImageSrc from "../../shared/utils/getImageSrc/getImageSrc";

export default function Details() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("details");
  const [details, setDetails] = useState<CardData>();

  const getData = async (id: string) => {
    // debugger;
    try {
      const data = await getDetails(id);
      setDetails(data);
    } catch {
      setDetails(undefined);
    }
  };

  useEffect(() => {
    id && getData(id);
  }, [id]);

  if (!id) {
    return null;
  }

  return details ? (
    <div className={styles.details}>
      <img className={styles.image} src={getImageSrc(details.url)} alt="" />
      <h2 className={styles.name}>{details.name}</h2>
      <ul className={styles.list}>
        <li>Birth year: {details.birth_year}</li>
        <li>Gender: {details.gender}</li>
        <li>Height: {details.height}</li>
        <li>Hair color: {details.hair_color}</li>
        <li>Skin color: {details.skin_color}</li>
        <li>Eye color: {details.eye_color}</li>
      </ul>
      <button
        onClick={() => {
          setSearchParams((params) => {
            params.delete("details");
            return params;
          });
          setDetails(undefined);
        }}
      >
        CLose
      </button>
    </div>
  ) : null;
}
