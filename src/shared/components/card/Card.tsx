import styles from './card.module.css'
import { Component, ReactNode } from 'react'
import CardData from '../../../models/CardData'

export default class Card extends Component<CardData> {
  render(): ReactNode {
    const id = this.props.url.replace(/[^\d]/g, '')
    const url = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    return (
      <li className={styles.card}>
        <img className={styles.image} src={url} alt={this.props.name} />
        <h3>{this.props.name}</h3>
        <p>Gender: {this.props.gender}</p>
        <p>Yey color: {this.props.eye_color}</p>
        <p>Height: {this.props.height}</p>
      </li>
    )
  }
}
