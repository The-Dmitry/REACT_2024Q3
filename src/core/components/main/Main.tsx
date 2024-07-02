import { Component, ReactNode } from "react";
import CardData from "../../../models/CardData";
import Card from "../../../shared/components/card/Card";

type MainProps = {
  data: CardData[];
};

export default class Main extends Component<MainProps> {
  render(): ReactNode {
    return (
      <main className="main">
        <ul className="list">
          {this.props.data.map((info) => (
            <Card key={info.name} {...info} />
          ))}
        </ul>
      </main>
    );
  }
}
