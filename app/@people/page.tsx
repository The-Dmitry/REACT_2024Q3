import PeopleWithLoader from '@core/components/people-with-loader/PeopleWithLoader'

interface Props {
  searchParams: { page?: string; search?: string }
}

export default function People({ searchParams }: Props) {
  return <PeopleWithLoader searchParams={searchParams} />
}
