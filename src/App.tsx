import { useState } from "react";
import "./App.css";
import Header from "./core/components/header/Header";
import Main from "./core/components/main/Main";
import Loader from "./shared/components/loader/Loader";
import CardData from "./models/CardData";

export default function App() {
  const [error, setError] = useState<boolean>(false);
  const isLoading = false;
  const cardData: CardData[] = [];

  function makeQuery(string: string) {
    return string;
  }

  if (error) {
    throw new Error("The user pressed the red button and broke everything");
  }

  return (
    <>
      <Header submit={(value) => makeQuery(value)} />
      {isLoading ? <Loader /> : <Main data={cardData} />}
      <button className="error-button" onClick={() => setError(true)}>
        Throw Error
      </button>
    </>
  );
}
