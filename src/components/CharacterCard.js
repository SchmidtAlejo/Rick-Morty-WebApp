import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CharacterCard.css'

export default function CharacterCard({ character }) {
  return (
    <Card className="card-container">
      <Link to={`/Character/${character.id}`} className="nav-link">
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title className="name-character">{character.name}</Card.Title>
          <Card.Text className="status">{character.status}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
