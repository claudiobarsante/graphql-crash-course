import React, { useState } from 'react'
import './CategoryDisplay.css'
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'

import { Link } from 'react-router-dom'

function CategoryDisplay(props) {
  const categories = props.categories
  return (
    <div className="CategoryDisplay">
      <Container className="CategoryDisplay-container">
        {categories.map((category) => {
          return (
            <Link
              to={`/products/${category.slug}`}
              className="CategoryDisplay-card-container"
            >
              <div className="CategoryDisplay-card">
                <img src={animals[category.image]} alt={category.slug} />
              </div>
              <h3>{category.category}</h3>
            </Link>
          )
        })}
      </Container>
    </div>
  )
}

export default CategoryDisplay
