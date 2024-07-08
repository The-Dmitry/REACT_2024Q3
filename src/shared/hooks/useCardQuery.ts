import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ApiResponse } from "../../models/ApiResponse";
import getCardList from "../utils/getData/getCardList";

export default function UseCardQuery() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [cardData, setCardData] = useState<ApiResponse>();
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const setPageNumber = useCallback(
    (num: number) => {
      setSearchParams((params) => {
        params.set("page", `${num}`);
        return params;
      });
    },
    [setSearchParams]
  );

  useEffect(() => {
    const page = searchParams.get("page");
    if (page && page !== `${currentPage}`) {
      setCurrentPage(+page);
      const makeQuery = async () => {
        try {
          setIsLoading(true);
          const data = await getCardList(page, searchWord);
          setCardData(data);
        } catch {
          setCardData({
            count: 0,
            results: [],
          });
          setSearchParams((params) => {
            params.delete("page");
            return params;
          });
          console.error("Error");
        } finally {
          setIsLoading(false);
        }
      };
      makeQuery();
    }
    if (!page) {
      setPageNumber(1);
    }
  }, [setPageNumber, searchParams, searchWord, currentPage]);

  const setNewSearchWord = useCallback(
    (text: string) => {
      setCurrentPage(0);
      setPageNumber(1);
      setSearchWord(text);
    },
    [setPageNumber]
  );

  return { isLoading, cardData, setNewSearchWord };
}
