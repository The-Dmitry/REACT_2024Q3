import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  callback: () => void;
}

export default function Button({ callback, children, ...rest }: Props) {
  const handler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    callback();
  };
  return (
    <button className={styles.button} onClick={handler} {...rest}>
      {children}
    </button>
  );
}
