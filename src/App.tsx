import { Component, ReactNode } from "react";
import "./App.css";
import Header from "./core/components/header/Header";
import CardData from "./models/CardData";
import Main from "./core/components/main/Main";
import Loader from "./shared/components/loader/Loader";
import { ApiResponse } from "./models/ApiResponse";

interface AppState {
  data: CardData[];
  isLoading: boolean;
  error: boolean;
}

export const LS_KEY = "MY_COOL_UNIQ_REACT_KEY";

export default class App extends Component<Record<string, unknown>, AppState> {
  state = {
    data: [],
    isLoading: false,
    error: false,
  };

  render(): ReactNode {
    if (this.state.error) {
      throw new Error("Some text");
    }
    return (
      <>
        <Header submit={(value) => this.getData(value)} />
        {this.state.isLoading ? <Loader /> : <Main data={this.state.data} />}
        <button
          className="error-button"
          onClick={() => this.setState({ error: true })}
        >
          Throw Error
        </button>
      </>
    );
  }

  async getData(query?: string) {
    const search = query ? query.trim() : "";
    try {
      this.setState({ isLoading: true });
      const response = await fetch(
        `https://swapi.dev/api/people/?page=1${search ? `&search=${search}` : ""}`,
      );

      if (response.ok) {
        const data: ApiResponse = await response.json();
        this.setState({ data: data.results });
      }
    } catch {
      this.setState({ data: [] });
    } finally {
      this.setState({ isLoading: false });
      this.lsHandler(search);
    }
  }

  lsHandler(value?: string) {
    if (typeof value === "string") {
      localStorage[LS_KEY] = value;
      return;
    }
  }
}
