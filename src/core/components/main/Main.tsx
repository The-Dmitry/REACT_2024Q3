import styles from './main.module.css'
import { Component, ReactNode } from 'react'
import CardData from '../../../models/CardData'
import Card from '../../../shared/components/card/Card'

type MainProps = {
  data: CardData[]
}

export default class Main extends Component<MainProps> {
  render(): ReactNode {
    return (
      <main className={styles.main}>
        {!!this.props.data.length && (
          <ul className={styles.list}>
            {this.props.data.map((info) => (
              <Card key={info.name} {...info} />
            ))}
          </ul>
        )}
        {!this.props.data.length && (
          <h2 className={styles.placeholder}>Nothing Found</h2>
        )}
      </main>
    )
  }
}
