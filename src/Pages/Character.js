import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/RickAndMortyAPI";
import "./Character.css";
import FavoriteButton from "../components/FavoriteButton";
import { useLoaderData } from "react-router-dom";

export default function Character() {
  const { character } = useLoaderData();

  return (
    <div className="container-character">
      <div className="top-container">
        <div className="image-container">
          <img src={character.image} />
        </div>
        <div className="name">
          <h1>{character.name}</h1>
          <p>{character.status}</p>
        </div>
        <div className="favorite">
          <FavoriteButton characterId={character.id} />
        </div>
      </div>
      <div className="low-container">
        <div className="low left">
          <div>
            <h4>Speceie</h4>
            <p>{character.species}</p>
          </div>
          <div>
            <h4>Gender</h4>
            <p>{character.gender}</p>
          </div>
        </div>
        <div className="low right">
          <div>
            <h4>Origin</h4>
            <p>{character.origin.name}</p>
          </div>
          <div>
            <h4>Location</h4>
            <p>{character.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const LoaderCharacter = async ({ params }) => {
  const character = await getCharacterById(params.characterId);
  return { character };
};
