import PeopleWithLoader from '@core/components/people-with-loader/PeopleWithLoader'
import PeopleProps from '@models/PeopleProps'

export default function People({ searchParams }: PeopleProps) {
  return <PeopleWithLoader searchParams={searchParams} />
}
