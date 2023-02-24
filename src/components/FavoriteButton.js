import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { useLocalStorageFavorites } from "./../useLocalStorage";

export default function FavoriteButton({ characterId }) {
  const [favorites, setFavorites] = useLocalStorageFavorites("favorites", []);
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = () => {
    if (favorites) {
      const newList = favorites;
      newList.push(characterId);
      setFavorites(newList);
    } else {
      setFavorites([characterId]);
    }
    setIsFavorite(true)
  };
  const removeFavorite = () => {
    const newList = favorites.filter(id=>id!==characterId)
    setFavorites(newList);
    setIsFavorite(false)
  };


  useEffect(()=>{
    favorites.find((id) => id === characterId)?
    setIsFavorite(true):
    setIsFavorite(false);
  }, [characterId])

  if (isFavorite) {
    return (
      <Button className={"icon"} onClick={removeFavorite} >
        <BsStarFill color="White" size={"100px"}/>
      </Button>
    );
  } else {
    return (
      <Button className={"icon"} onClick={addFavorite} >
        <BsStar color="White" size={"100px"}/>
      </Button>
    );
  }
}
