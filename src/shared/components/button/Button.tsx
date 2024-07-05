import styles from "./button.module.css";

type Props = {
  callback: () => void;
  text: string;
};

export default function Button({ callback, text }: Props) {
  return (
    <button className={styles.button} onClick={callback}>
      {text}
    </button>
  );
}
