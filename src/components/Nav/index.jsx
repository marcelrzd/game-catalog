import React, { useState } from "react";
// styles and animation
import NavStyle from "./styles/NavStyle";
import logo from "../../img/logo.svg";
import { fadeIn } from "../../animations";
// redux and routes
import {
  fetchSearch,
  loadAll,
  loadNew,
  loadPopular,
  loadUpcoming,
} from "../../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  // handlers
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
    const updatedListItems = listItems.map((item) => {
      return { ...item, class: "" };
    });
    setListItems(updatedListItems);
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  const [listItems, setListItems] = useState([
    { id: "All", class: "active" },
    { id: "New", class: "" },
    { id: "Popular", class: "" },
    { id: "Upcoming", class: "" },
  ]);
  const handleItemClick = (id) => {
    clearSearched();
    const updatedListItems = listItems.map((item) => {
      if (item.id === id) {
        if (item.id === "All") {
          dispatch(loadAll());
        }
        if (item.id === "Upcoming") {
          dispatch(loadUpcoming());
        }
        if (item.id === "New") {
          dispatch(loadNew());
        }
        if (item.id === "Popular") {
          dispatch(loadPopular());
        }
        return { ...item, class: "active" };
      } else {
        return { ...item, class: "" };
      }
    });
    setListItems(updatedListItems);
  };

  return (
    <NavStyle.StyledNav variants={fadeIn} initial="hidden" animate="show">
      <NavStyle.Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Games Library</h1>
      </NavStyle.Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
      <NavStyle.StyledFilter>
        <ul>
          {listItems.map((item) => (
            <li
              key={item.id}
              className={item.class}
              onClick={() => handleItemClick(item.id)}
            >
              {item.id}
            </li>
          ))}
        </ul>
      </NavStyle.StyledFilter>
    </NavStyle.StyledNav>
  );
};

export default Nav;
