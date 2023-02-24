import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { getCharactersByName } from "../services/RickAndMortyAPI";
import Autocomplete from "./Autocomplete.js";

export default function Navigation() {
  const [characters, setCharacters] = useState("");

  const onChange = async (value) => {
    if (value !== "") {
      const response = await getCharactersByName(value);
      setCharacters(response);
    } else {
      setCharacters([]);
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container style={{ marginLeft: "60px" }}>
          <NavLink className="navbar-brand" to={"/"}>
            Home
          </NavLink>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/favorites">
              Favorites
            </NavLink>
          </Nav>
          <Autocomplete
            list={characters}
            onChange={onChange}
            emptySearch={() => {
              setCharacters([]);
            }}
          />
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
