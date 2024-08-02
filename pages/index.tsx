import { fetchPeople } from '@core/api/fetchPeople'
import { GetServerSideProps, NextPage } from 'next'
import { ApiResponse } from '@models/ApiResponse'
import Main from '@core/components/main/Main'
import { fetchDetails } from '@core/api/fetchDetails'
import CardData from '@models/CardData'
import { Details } from '@pages/index'

interface Props {
  people: ApiResponse
  id: CardData | null
  page: string
}

// eslint-disable-next-line react-refresh/only-export-components
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
    </>
  )
}

export default HomePage
