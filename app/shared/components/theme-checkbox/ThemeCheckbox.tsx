import { useContext } from "react";
import { ThemeContext } from "~/core/context/ThemeContext";
import styles from "./ThemeCheckbox.module.css";

export default function ThemeCheckbox() {
  const { handleTheme, theme } = useContext(ThemeContext);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={handleTheme}
      />
      <span className={styles.slider}></span>
    </label>
  );
}
