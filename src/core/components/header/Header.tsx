import { memo, useState } from "react";
import Button from "../../../shared/components/button/Button";
import styles from "./header.module.css";

type HeaderProps = {
  submit: (value: string) => void;
};

const Header = memo(({ submit }: HeaderProps) => {
  console.log("render header");
  const [value, setValue] = useState("");

  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <Button callback={() => submit(value)} text="Search"></Button>
    </header>
  );
});

export default Header;
