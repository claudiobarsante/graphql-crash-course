import React from 'react'
import MainHero from '../components/MainHero/MainHero'
import CategoryDisplay from '../components/CategoryDisplay/CategoryDisplay'
import CardDisplay from '../components/CardDisplay/CardDisplay'
import { useQuery, useMutation, gql } from '@apollo/client'

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

const ADD_ANIMAL_MUTATION = gql`
  mutation (
    $image: String!
    $category: String!
    $title: String!
    $stock: Int!
    $price: String!
    $description: [String!]!
    $rating: Float!
    $slug: String!
  ) {
    addAnimal(
      image: $image
      category: $category
      title: $title
      stock: $stock
      price: $price
      description: $description
      rating: $rating
      slug: $slug
    ) {
      id
    }
  }
`

function LandingPage() {
  const { loading, error, data } = useQuery(ANIMALS_AND_CATEGORIES_QUERY)
  const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Something went wrong...</div>
  console.log({ addAnimal })

  return (
    <div>
      <MainHero />
      <CategoryDisplay categories={data.categories} />
      <CardDisplay animals={data.animals} />
      <button
        onClick={() => {
          addAnimal({
            variables: {
              image: 'ostrich',
              category: '1',
              title: 'This is a really cool ostrich',
              stock: 13,
              price: '32,333',
              description: ['das'],
              rating: 3.5,
              slug: 'ostrich'
            }
          })
        }}
      >
        {' '}
        Add an Ostrich{' '}
      </button>
    </div>
  )
}

export default LandingPage
