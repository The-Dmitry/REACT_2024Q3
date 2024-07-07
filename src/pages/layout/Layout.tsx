import styles from "./layout.module.css";
import { useState } from "react";
import Header from "../../core/components/header/Header";
import Loader from "../../shared/components/loader/Loader";
import Main from "../../core/components/main/Main";
import { Outlet } from "react-router";
import Pagination from "../../core/components/pagination/Pagination";
import UseCardQuery from "../../shared/hooks/useCardQuery";
import ErrorBoundary from "../../core/components/error-boundary/ErrorBoundary";

export default function Layout() {
  const [error, setError] = useState<boolean>(false);
  const { cardData, isLoading, setNewSearchWord } = UseCardQuery();

  if (error) {
    throw new Error("The user pressed the red button and broke everything");
  }

  return (
    <>
      <ErrorBoundary>
        <Header submit={setNewSearchWord} />
        <div className={styles.container}>
          <section className={styles.list}>
            {isLoading ? (
              <Loader />
            ) : (
              cardData && <Main data={cardData.results} />
            )}
            <Pagination totalCount={cardData?.count || 0}></Pagination>
          </section>
          <Outlet />
        </div>
        <button className="error-button" onClick={() => setError(true)}>
          Throw Error
        </button>
      </ErrorBoundary>
    </>
  );
}
