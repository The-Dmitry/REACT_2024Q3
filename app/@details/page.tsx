import DetailsWithLoader from '@core/components/details-with-loader/DetailsWithLoader'

interface Props {
  searchParams: { details?: string }
}

export default function Details({ searchParams }: Props) {
  return <DetailsWithLoader id={searchParams.details} />
}
