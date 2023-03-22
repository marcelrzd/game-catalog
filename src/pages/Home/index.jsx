import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../../actions/gamesAction";
// style and animation
import HomeStyles from "./styles/HomeStyles";
import { AnimatePresence } from "framer-motion";
import { fadeIn } from "../../animations";
// Components
import Game from "../../components/Game";
import GameDetail from "../../components/GameDetail";

// routes
import { useLocation } from "react-router-dom";

const Home = () => {
  // get current location
  const pathID = useLocation().pathname.split("/")[2];
  // Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //   Get data
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <HomeStyles.GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimatePresence>
        {pathID && <GameDetail pathID={pathID} />}
      </AnimatePresence>
      {searched.length ? (
        <div>
          <h2>Searched Games</h2>
          <HomeStyles.Games>
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </HomeStyles.Games>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <HomeStyles.Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </HomeStyles.Games>
      <HomeStyles.Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </HomeStyles.Games>
      <HomeStyles.Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </HomeStyles.Games>
    </HomeStyles.GameList>
  );
};

export default Home;
