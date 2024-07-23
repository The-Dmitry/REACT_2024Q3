import styles from './DownloadLink.module.css'
import CardData from '../../../models/CardData'

function convertToCSV(array: CardData[]) {
  return [
    Object.keys(array[0]).join(';'),
    ...array.map((data) => Object.values(data).join(';')),
  ].join('\n')
}

export function DownloadLink({ data }: { data: Record<string, CardData> }) {
  const array = Object.values(data)
  const filename = `${array.length}_star-wars`
  const blob = new Blob([convertToCSV(array)], {
    type: 'text/csv;charset=utf-8;',
  })
  const url = URL.createObjectURL(blob)

  return (
    <a href={url} download={filename} className={styles.link}>
      Download
    </a>
  )
}
