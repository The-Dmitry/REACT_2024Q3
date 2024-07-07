import styles from "./details.module.css";
import { useSearchParams } from "react-router-dom";

export default function Details() {
  const searchParams = useSearchParams()[0];
  const id = searchParams.get("details");
  if (!id) {
    return null;
  }
  return <div className={styles.details}>details {id}</div>;
}
