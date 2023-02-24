import React, { useEffect, useState } from "react";
import { getCharacters } from "../services/RickAndMortyAPI";
import CharacterList from "../components/CharacterList";
import PageSelector from "../components/PageSelector";
import DropdownFilter from "../components/DropdownFilter";
import "./Home.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [filter, setFilter]= useState('')
  const [filterName, setFilterName]= useState('Filter')

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getCharacters(page, filter);
      setCharacters(response.results);
      setMaxPage(response.info.pages);
    };
    fetchCharacters();
  }, [page, filter]);

  const updatePage = (page) => {
    setPage(page);
  };

  const updateFilter = (query, value, filterName) => {
    setFilter(`${query}=${value}`);
    setFilterName(filterName);
    setPage(1)
  };

  return (
    <div className="home-container">
      <div className="filter">
        <DropdownFilter filterName={filterName} updateFilter={updateFilter}/>
      </div>
      <div className="pages-buttons">
        <PageSelector page={page} updatePage={updatePage} maxPage={maxPage}/>
      </div>
      <CharacterList key={"home"} characters={characters} />
      <div className="pages-buttons">
        <PageSelector page={page} updatePage={updatePage} maxPage={maxPage}/>
      </div>
    </div>
  );
}
