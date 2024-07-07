import { useEffect, useState } from "react";

const LS_KEY = "MY_COOL_UNIQ_KEY";

export default function UseSaveQuery(): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] {
  const [value, setValue] = useState(localStorage[LS_KEY] || "");

  useEffect(() => {
    const saveValueToLs = () => {
      localStorage.setItem(LS_KEY, value);
    };
    return () => saveValueToLs();
  }, [value]);

  return [value, setValue];
}
