import { Component, ReactNode } from "react";
import "./App.css";
import Header from "./core/components/header/Header";
import Card from "./models/CardData";
import Main from "./core/components/main/Main";

export interface ApiResponse {
  count: number;
  next: string;
  previous: unknown;
  results: Card[];
}

interface AppState {
  initialValue: string;
  data: Card[];
}

export default class App extends Component<undefined, AppState> {
  state = {
    initialValue: "",
    data: [],
  };

  render(): ReactNode {
    return (
      <>
        <Header submit={(value) => this.getData(value)} />
        <Main data={this.state.data} />
      </>
    );
  }

  async getData(query?: string) {
    console.log(query);

    const response = await fetch(
      `https://swapi.dev/api/people/?page=1${query ? `&search=${query.trim()}` : ""}`
    );

    if (response.ok) {
      const data = await response.json();
      this.setState({ data: data.results });
      console.log(this.state.data);
    }
  }
}
