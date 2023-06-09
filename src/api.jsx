//  base url
const api_key = process.env.REACT_APP_API_KEY;
const base_url = `https://api.rawg.io/api/games`;

// getting dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// popular games
const popular_games = `?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
// game details
export const gameDetailsURL = (game_id) =>
  `${base_url}/${game_id}.json?&key=${api_key}`;
// Games Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}/${game_id}/screenshots?&key=${api_key}`;
// searched game
export const searchGameURL = (game_name) =>
  `${base_url}?search=${game_name}&page_size=10&key=${api_key}`;
