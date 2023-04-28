import React from "react";
import CharacterCard from "../components/CharacterCard";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './CharacterList.css'

export default function CharacterList({ characters }) {
  return (
    <Row
      xs={1}
      md={"auto"}
      className="g-4 row-container"
      style={{
        textAlign: "center",
        marginBottom: "10px",
        marginRight: "0px",
        marginLeft:"0px"
      }}
    >
      {characters.map((character) => (
        <Col
          key={character.id}
          style={{ width: "auto" }}
          className="col-container"
        >
          <CharacterCard character={character} />
        </Col>
      ))}
    </Row>
  );
}
