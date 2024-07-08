import styles from "./main.module.css";
import CardData from "../../../models/CardData";
import Card from "../../../shared/components/card/Card";
import RestoreParameters from "../../../shared/components/restore-parameters/RestoreParameters";

type MainProps = {
  data: CardData[];
};

export default function Main({ data }: MainProps) {
  return (
    <main className={styles.main}>
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
