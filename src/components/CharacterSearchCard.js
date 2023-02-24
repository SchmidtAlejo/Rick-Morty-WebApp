import React from "react";
import "./CharacterSearchCard.css";

export default function CharacterSearchCard({ character}) {
  return (
    <div className="container-search-card">
      <div>
        <img className="image" src={character.image} />
      </div>
      <div className="character-name">{character.name}</div>
    </div>
  );
}
