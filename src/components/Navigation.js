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

  useEffect(() => {
    if (onToggle) {
      document.body.classList.add("no-overflow");
    } else {
      document.body.classList.remove("no-overflow");
    }
  }, [onToggle]);

  const onChange = async (value) => {
    if (value !== "") {
      const response = await getCharactersByName(value);
      setCharacters(response);
    } else {
      setCharacters([]);
    }
  };

  const returnToggleClass = () => {
    if (onToggle) {
      return "me-auto nav-menu nav-menu_visible";
    } else {
      return "me-auto nav-menu";
    }
  };

  return (
    <div className="content">
      <Navbar bg="dark" variant="dark">
        <Container className="container-nav">
          <div className="logo-container-header">
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
            <NavLink className="navbar-brand" to={"/"}>
              <img
                src={require("./../assets/Rick_and_Morty.svg.png")}
                className="img"
                onClick={() => {
                  setOnToggle(false);
                }}
              />
            </NavLink>
          </div>
          <div className={returnToggleClass()}>
            <Nav className="nav-menu-list">
              <NavLink
                className="nav-link"
                to="/favorites"
                onClick={() => {
                  setOnToggle(false);
                }}
              >
                Favorites
              </NavLink>
              <NavLink
                className="nav-link"
                to="/episode/"
                onClick={() => {
                  setOnToggle(false);
                }}
              >
                Episodes
              </NavLink>
              <NavLink
                className="nav-link"
                to="/location/"
                onClick={() => {
                  setOnToggle(false);
                }}
              >
                Locations
              </NavLink>
            </Nav>
            <div className="autocomplete-container">
              <Autocomplete
                list={characters}
                onChange={onChange}
                emptySearch={() => {
                  setCharacters([]);
                }}
                onToggle={() => {
                  setOnToggle(false);
                }}
              />
            </div>
            <div
              className="opacation"
              onClick={() => {
                setOnToggle(false);
              }}
            ></div>
          </div>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
