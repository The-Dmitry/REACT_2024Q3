import { GetServerSideProps, NextPage } from 'next'
import Main from '@core/components/main/Main'
import NextLoader from '@shared/components/next-loader/NextLoader'
import Details from '@pages/details/Details'
import { fetchPeople } from '@core/api/fetch-people/fetchPeople'
import { ApiResponse } from '@models/ApiResponse'
import { fetchDetails } from '@core/api/fetch-details/fetchDetails'
import CardData from '@models/CardData'

interface Props {
  people: ApiResponse
  id: CardData | null
  page: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = '1', search = '', details } = context.query
  const [people, id] = await Promise.all([
    fetchPeople(page as string, search as string),
    details ? fetchDetails(details as string) : null,
  ])

  return {
    props: { people, page, id },
  }
}

const HomePage: NextPage<Props> = ({ people, page, id }) => {
  return (
    <>
      <Main data={people} page={page} />
      {id && <Details data={id} />}
      <NextLoader />
    </>
  )
}

export default HomePage
