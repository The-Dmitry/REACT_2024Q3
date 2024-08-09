import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { fetchDetails } from '~/core/api/fetch-details/fetchDetails'
import { fetchPeople } from '~/core/api/fetch-people/fetchPeople'
import Main from '~/core/components/main/Main'
import { ApiResponse } from '~/models/ApiResponse'
import CardData from '~/models/CardData'
import Details from '~/pages/details/Details'
import Loader from '~/shared/components/loader/Loader'

interface Props {
  people: ApiResponse
  id: CardData | null
  page: string
}

export const loader = async ({
  request,
}: LoaderFunctionArgs): Promise<Props> => {
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)

  const search = params.get('search') || ''
  const page = params.get('page') || '1'
  const details = params.get('details') || ''

  const [people, id] = await Promise.all([
    fetchPeople(page, search),
    details ? fetchDetails(details) : null,
  ])

  return { people, id, page }
}

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  const { id, page, people }: Props = useLoaderData()
  const navigation = useNavigation()
  return (
    <div className="wrapper">
      {navigation.state === 'loading'}
      <Main data={people} page={page} />
      {id && <Details data={id} />}
      {navigation.state === 'loading' && <Loader />}
    </div>
  )
}
