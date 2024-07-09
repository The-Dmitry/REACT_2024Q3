import styles from './button.module.css'
import { Component, ReactNode } from 'react'

type Props = {
  callback: () => void
  text: string
}

export default class Button extends Component<Props> {
  render(): ReactNode {
    return (
      <button className={styles.button} onClick={this.props.callback}>
        {this.props.text}
      </button>
    )
  }
}
