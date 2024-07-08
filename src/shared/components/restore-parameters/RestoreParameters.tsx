import { useSearchParams } from "react-router-dom";
import Button from "../button/Button";

export default function RestoreParameters() {
  const setSearchParams = useSearchParams()[1];
  const restore = () => {
    setSearchParams((params) => {
      params.delete("page");
      params.delete("details");
      return params;
    });
  };

  return (
    <Button callback={restore} style={{ marginInline: "auto" }}>
      Restore parameters
    </Button>
  );
}
