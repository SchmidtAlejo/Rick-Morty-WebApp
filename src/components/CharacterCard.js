import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'

export default function CharacterCard({character}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/Character/${character.id}`} className='nav-link'>
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>
            {character.status}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}
