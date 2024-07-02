import styles from "./card.module.css";
import { Component, ReactNode } from "react";
import CardData from "../../../models/CardData";

export default class Card extends Component<CardData> {
  render(): ReactNode {
    return (
      <li className={styles.card}>
        <h3>{this.props.name}</h3>
        <p>Gender: {this.props.gender}</p>
        <p>Yey color: {this.props.eye_color}</p>
        <p>Height: {this.props.height}</p>
      </li>
    );
  }
}
