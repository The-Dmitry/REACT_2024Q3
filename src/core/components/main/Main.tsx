import { Component, ReactNode } from "react";
import CardData from "../../../models/CardData";

type MainProps = {
  data: CardData[];
};

export default class Main extends Component<MainProps> {
  render(): ReactNode {
    return (
      <main className="main">
        <ul className="list">
          {this.props.data.map((info) => (
            <li key={info.name}>{info.name}</li>
          ))}
        </ul>
      </main>
    );
  }
}
