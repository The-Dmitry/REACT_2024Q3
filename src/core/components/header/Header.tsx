import { LS_KEY } from '../../../App'
import Button from '../../../shared/components/button/Button'
import styles from './header.module.css'
import { Component, ReactNode } from 'react'

type HeaderState = {
  value: string
}

type HeaderProps = {
  submit: (value: string) => void
}

export default class Header extends Component<HeaderProps, HeaderState> {
  state = {
    value: localStorage.getItem(LS_KEY) || '',
  }

  componentDidMount(): void {
    this.props.submit(this.state.value)
  }

  render(): ReactNode {
    return (
      <header className={styles.header}>
        <input
          className={styles.input}
          type="text"
          value={this.state.value}
          onInput={(e) =>
            this.setState({ value: (e.target as HTMLInputElement).value })
          }
        />
        <Button
          callback={() => this.props.submit(this.state.value)}
          text="Search"
        ></Button>
      </header>
    )
  }
}
