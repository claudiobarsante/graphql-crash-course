import React from 'react'
import MainHero from '../components/MainHero/MainHero'
import CategoryDisplay from '../components/CategoryDisplay/CategoryDisplay'
import CardDisplay from '../components/CardDisplay/CardDisplay'
import { useQuery, gql } from '@apollo/client'

const ANIMALS_AND_CATEGORIES_QUERY = gql`
  {
    animals {
      id
      image
      price
      slug
      title
    }
    categories {
      id
      category
      image
      slug
    }
  }
`

function LandingPage() {
  const { loading, error, data } = useQuery(ANIMALS_AND_CATEGORIES_QUERY)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Something went wrong...</div>
  return (
    <div>
      <MainHero />
      <CategoryDisplay categories={data.categories} />
      <CardDisplay animals={data.animals} />
    </div>
  )
}

export default LandingPage
