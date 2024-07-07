import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ApiResponse } from "../../models/ApiResponse";
import getCardList from "../utils/getData/getCardList";

export default function UseCardQuery() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [cardData, setCardData] = useState<ApiResponse>();
  const [searchWord, setSearchWord] = useState("");

  const resetPageNumber = useCallback(() => {
    setSearchParams((params) => {
      params.set("page", "1");
      return params;
    });
  }, [setSearchParams]);

  useEffect(() => {
    const makeQuery = async () => {
      setIsLoading(true);
      const page = searchParams.get("page");
      if (!page) {
        resetPageNumber();
      }
      const data = await getCardList(page, searchWord);
      setCardData(data);
      setIsLoading(false);
    };
    makeQuery();
  }, [resetPageNumber, searchParams, searchWord]);

  const setNewSearchWord = useCallback(
    (text: string) => {
      resetPageNumber();
      setSearchWord(text);
    },
    [resetPageNumber]
  );

  return { isLoading, cardData, setNewSearchWord };
}
