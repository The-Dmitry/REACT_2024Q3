import styles from './loader.module.css'
import { Component, ReactNode } from 'react'

export default class Loader extends Component {
  render(): ReactNode {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
      </div>
    )
  }
}
