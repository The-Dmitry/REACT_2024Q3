import { Component, ReactNode } from "react";
import "./App.css";
import Header from "./core/components/header/Header";
import Card from "./models/CardData";
import Main from "./core/components/main/Main";
import Loader from "./shared/components/loader/Loader";

export interface ApiResponse {
  count: number;
  next: string;
  previous: unknown;
  results: Card[];
}

interface AppState {
  searchValue: string;
  data: Card[];
  isLoading: boolean;
}

export default class App extends Component<undefined, AppState> {
  state = {
    searchValue: "",
    data: [],
    isLoading: false,
  };

  render(): ReactNode {
    return (
      <>
        <Header submit={(value) => this.getData(value)} />
        {this.state.isLoading ? <Loader /> : <Main data={this.state.data} />}
      </>
    );
  }

  async getData(query?: string) {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(
        `https://swapi.dev/api/people/?page=1${query ? `&search=${query.trim()}` : ""}`
      );

      if (response.ok) {
        const data: ApiResponse = await response.json();
        this.setState({ data: data.results });
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ isLoading: false });
    }
  }
}
