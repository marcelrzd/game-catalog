//  base url
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`;

// getting dates
const getCurrentMonth = () => {
  const month = new Date().getMonth + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// getting full date
const currentYear = new Date().getFullYear;
const currentMonth = getCurrentMonth;
const currentDay = getCurrentDay;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// popular games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
