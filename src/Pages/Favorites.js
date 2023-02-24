import React, { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";
import { getFavoritesCharacters } from "../services/RickAndMortyAPI";
import { useLocalStorageFavorites } from "../useLocalStorage";
import "./Favorites.css"

export default function Favorites() {
  const [favorites] = useLocalStorageFavorites("favorites", []);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getFavoritesCharacters(favorites);
      setCharacters(response);
    };
    fetchCharacters();
  }, []);

  if (characters.length > 0) {
    return (
      <div className="favorites-container">
        <CharacterList key={"favorites"} characters={characters} />
      </div>
    );
  }
}
