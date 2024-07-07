import { useCallback, useEffect, useState } from "react";
import CardData from "../../models/CardData";
import Header from "../../core/components/header/Header";
import Loader from "../../shared/components/loader/Loader";
import Main from "../../core/components/main/Main";
import { Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";
import getCardData from "../../shared/utils/getData/getCardData";

export default function Layout() {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [cardData, setCardData] = useState<CardData[]>([]);

  const makeQuery = useCallback(async (search?: string) => {
    setIsLoading(true);
    const data = await getCardData(search);
    setCardData(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    makeQuery();
  }, [makeQuery]);

  if (error) {
    throw new Error("The user pressed the red button and broke everything");
  }

  return (
    <>
      <Header submit={makeQuery} />
      {isLoading ? <Loader /> : <Main data={cardData} />}
      <button className="error-button" onClick={() => setError(true)}>
        Throw Error
      </button>
      <button
        onClick={() =>
          setSearchParams((params) => {
            params.set("test", "123123");
            return params;
          })
        }
      >
        TEST
      </button>
      <Outlet />
    </>
  );
}
