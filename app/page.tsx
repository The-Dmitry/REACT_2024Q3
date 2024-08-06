import DetailsWithLoader from '@core/components/details-with-loader/DetailsWithLoader'
import PeopleWithLoader from '@core/components/people-with-loader/PeopleWithLoader'
import PageProps from '@models/PageProps'

export default function Page({ searchParams }: PageProps) {
  return (
    <>
      <PeopleWithLoader searchParams={searchParams} />
      <DetailsWithLoader id={searchParams.details} />
    </>
  )
}
