import Button from "../../../shared/components/button/Button";
import styles from "./fallback.module.css";

export default function Fallback({ reload }: { reload: () => void }) {
  return (
    <div className={styles.fallback}>
      <h2 className={styles.text}>
        Congratulations! You pushed the red button and broke everything.
      </h2>
      <Button callback={reload}>Reload</Button>
    </div>
  );
}
