/* eslint-disable react-refresh/only-export-components */
import { fetchPeople } from '@core/api/fetchPeople'
import { GetServerSideProps, NextPage } from 'next'
import { ApiResponse } from '@models/ApiResponse'
import Main from '@core/components/main/Main'
// import { useRouter } from 'next/router'

interface Props {
  people: ApiResponse
  page: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = '1' } = context.query
  const people = await fetchPeople(page as string)
  return {
    props: { people, page },
  }
}

const HomePage: NextPage<Props> = ({ people, page }) => {
  // const router = useRouter()

  return <Main data={people} page={page} />
}

export default HomePage
