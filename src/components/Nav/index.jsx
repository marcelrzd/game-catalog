import React, { useState } from "react";
// styles and animation
import NavStyle from "./styles/NavStyle";
import logo from "../../img/logo.svg";
import { fadeIn } from "../../animations";
// redux and routes
import { fetchSearch } from "../../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
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
          <li className="active">Upcoming</li>
          <li>Popular</li>
          <li>New</li>
        </ul>
      </NavStyle.StyledFilter>
    </NavStyle.StyledNav>
  );
};

export default Nav;
