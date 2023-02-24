import React, { useState } from "react";
import CharacterSearchCard from "./CharacterSearchCard";
import "./Autocomplete.css";
import { Link } from "react-router-dom";

export default function Autocomplete({ list, onChange, emptySearch }) {

  const [input, setInput]= useState('')

  const getValue = (event) => {
    onChange(event.target.value);
    setInput(event.target.value);
  };

  const onClick = () => {
    setInput('');
    emptySearch()
  };

  const renderList = () => {
    if (list) {
      return (
        <div>
          {list.map((character) => 
          (
            <Link key={character.id} to={`/Character/${character.id}`} className="nav-link" onClick={onClick} >
              <CharacterSearchCard character={character} />
            </Link>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <input
        className="search-character"
        placeholder="Search"
        onChange={getValue}
        value={input}
      />
      <div className="autocomplete">{renderList()}</div>
    </div>
  );
}
