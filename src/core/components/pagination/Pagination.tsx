import { useSearchParams } from "react-router-dom";
import styles from "./pagination.module.css";

export default function Pagination({ totalCount }: { totalCount: number }) {
  const pageCount = Math.ceil(totalCount / 10);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");

  return (
    <div className={styles.pagination}>
      {new Array(pageCount).fill(0).map((_, i) => (
        <button
          key={i}
          className={styles.button}
          disabled={!!(currentPage && i + 1 === +currentPage)}
          onClick={() =>
            setSearchParams((params) => {
              params.set("page", `${i + 1}`);
              return params;
            })
          }
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
