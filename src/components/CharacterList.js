import React from "react";
import CharacterCard from "../components/CharacterCard";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CharacterList({ characters }) {
  return (
    <Row
      xs={1}
      md={"auto"}
      className="g-4"
      style={{
        textAlign: "center",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        marginBottom: "10px",
      }}
    >
      {characters.map((character) => (
        <Col key={character.id}>
          <CharacterCard character={character} />
        </Col>
      ))}
    </Row>
  );
}
