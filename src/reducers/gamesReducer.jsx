const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_POPULAR":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: "",
        upcoming: "",
      };
    case "FETCH_UPCOMING":
      return {
        ...state,
        upcoming: action.payload.upcoming,
        popular: "",
        newGames: "",
      };
    case "FETCH_NEW":
      return {
        ...state,
        newGames: action.payload.newGames,
        popular: "",
        upcoming: "",
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
