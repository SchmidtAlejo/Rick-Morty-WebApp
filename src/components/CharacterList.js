import React from "react";
import CharacterCard from "../components/CharacterCard";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CharacterList.css";

export default function CharacterList({ characters }) {
  return (
    <div className="grid-container">
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
}
