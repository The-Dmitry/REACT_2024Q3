import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  callback: () => void;
}

export default function Button({ callback, children, ...rest }: Props) {
  return (
    <button className={styles.button} onClick={callback} {...rest}>
      {children}
    </button>
  );
}
