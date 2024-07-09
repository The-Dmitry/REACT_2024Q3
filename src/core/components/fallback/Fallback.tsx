import Button from '../../../shared/components/button/Button'
import styles from './fallback.module.css'
import { Component, ReactNode } from 'react'

type Props = {
  reload: () => void
}

export default class Fallback extends Component<Props> {
  render(): ReactNode {
    return (
      <div className={styles.fallback}>
        <h2 className={styles.text}>
          Congratulations! You pushed the red button and broke everything.
        </h2>
        <Button callback={this.props.reload} text="Reload" />
      </div>
    )
  }
}
