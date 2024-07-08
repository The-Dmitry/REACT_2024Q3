import styles from "./main.module.css";
import CardData from "../../../models/CardData";
import Card from "../../../shared/components/card/Card";
import RestoreParameters from "../../../shared/components/restore-parameters/RestoreParameters";
import { useSearchParams } from "react-router-dom";

type MainProps = {
  data: CardData[];
};

export default function Main({ data }: MainProps) {
  const setSearch = useSearchParams()[1];

  const closeDetails = () => {
    setSearch((params) => {
      params.delete("details");
      return params;
    });
  };
  return (
    <main className={styles.main} onClick={closeDetails}>
      {data && !!data.length && (
        <ul className={styles.list}>
          {data.map((info) => (
            <Card key={info.name} {...info} />
          ))}
        </ul>
      )}
      {(!data || !data.length) && (
        <>
          <h2 className={styles.placeholder}>Nothing Found</h2>
          <RestoreParameters />
        </>
      )}
    </main>
  );
}
