import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from "../api";

// Action Creator
export const loadAll = () => async (dispatch) => {
  // fetch axios
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_ALL",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const loadPopular = () => async (dispatch) => {
  // fetch axios
  const popularData = await axios.get(popularGamesURL());

  dispatch({
    type: "FETCH_POPULAR",
    payload: {
      popular: popularData.data.results,
    },
  });
};

export const loadUpcoming = () => async (dispatch) => {
  // fetch axios
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_UPCOMING",
    payload: {
      upcoming: upcomingData.data.results,
    },
  });
};

export const loadNew = () => async (dispatch) => {
  // fetch axios
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_NEW",
    payload: {
      newGames: newGamesData.data.results,
      popular: "",
      upcoming: "",
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
