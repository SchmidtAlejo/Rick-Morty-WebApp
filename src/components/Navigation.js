import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { getCharactersByName } from "../services/RickAndMortyAPI";
import Autocomplete from "./Autocomplete.js";
import "./Navigation.css";
import { FaBars } from "react-icons/fa";
import Footer from "./Footer";

export default function Navigation() {
  const [characters, setCharacters] = useState("");
  const [onToggle, setOnToggle] = useState(false);
  const [outlet, setOutlet] = useState(true);

  const onChange = async (value) => {
    if (value !== "") {
      const response = await getCharactersByName(value);
      setCharacters(response);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    if (onToggle) {
      setTimeout(() => {
        setOutlet(false);
      }, 150);
    } else {
      setOutlet(true);
    }
  }, [onToggle]);

  const returnToggleClass = () => {
    if (onToggle) {
      return "me-auto nav-menu nav-menu_visible";
    } else {
      return "me-auto nav-menu";
    }
  };

  const renderOutlet = () => {
    if (outlet) {
      return <Outlet />;
    }
  };

  return (
    <div className="content">
      <Navbar bg="dark" variant="dark">
        <Container className="container">
          <div className="nav-toggle">
            <div
              className="bars"
              onClick={() => {
                setOnToggle(!onToggle);
              }}
            >
              <FaBars color="White" size={"20px"} />
            </div>
          </div>
          <Nav className={returnToggleClass()}>
            <NavLink className="navbar-brand" to={"/"}>
              Rick And Morty
            </NavLink>
            <NavLink className="nav-link" to="/favorites">
              Favorites
            </NavLink>
            <NavLink className="nav-link" to="/episode/">
              Episodes
            </NavLink>
            <NavLink className="nav-link" to="/location/">
              Locations
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
      {renderOutlet()}
      <Footer />
    </div>
  );
}
