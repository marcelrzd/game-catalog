import React from "react";

// style and animation
import { motion } from "framer-motion";
import { smallImage } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import GameDetailStyles from "./styles/GameDetailStyles";

// Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// logos
import playstation4 from "../../img/ps4.svg";
import playstation5 from "../../img/ps5.svg";
import steam from "../../img/steam.svg";
import xbox from "../../img/xbox.svg";
import nintendo from "../../img/nintendo.svg";
import apple from "../../img/apple.svg";
import gamepad from "../../img/gamepad.svg";
// stars
import starEmpty from "../../img/star-empty.png";
import starFull from "../../img/star-full.png";

const GameDetail = ({ pathID }) => {
  const navigate = useNavigate();
  // exit detail
  const closeButtonHandler = (e) => {
    document.body.style.overflow = "auto";
    navigate("/");
  };
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  // get data
  const { screenshot, game, isLoading } = useSelector((state) => state.detail);
  // get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation4;
      case "PlayStation 5":
        return playstation5;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      case "macOS":
        return apple;
      default:
        return gamepad;
    }
  };
  // get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };
  return (
    <>
      {!isLoading && (
        <GameDetailStyles.CardShadow
          className="shadow"
          onClick={exitDetailHandler}
        >
          <GameDetailStyles.Detail layoutId={pathID}>
            <GameDetailStyles.CloseButton
              id="exit"
              onClick={closeButtonHandler}
            >
              <FontAwesomeIcon onClick={closeButtonHandler} icon={faXmark} />
            </GameDetailStyles.CloseButton>
            <GameDetailStyles.Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <GameDetailStyles.Info>
                <h3>Platforms</h3>
                <GameDetailStyles.Platforms>
                  {game.platforms.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                      alt={data.platform.name}
                    ></img>
                    // <h1>{data.platform.name}</h1>
                  ))}
                </GameDetailStyles.Platforms>
              </GameDetailStyles.Info>
            </GameDetailStyles.Stats>
            <GameDetailStyles.Media>
              <motion.img
                layoutId={`image ${pathID}`}
                src={smallImage(game.background_image, 640)}
                alt="game_image"
              />
            </GameDetailStyles.Media>
            <GameDetailStyles.Description>
              <p>{game.description_raw}</p>
            </GameDetailStyles.Description>
            <div className="gallery">
              {screenshot.results.map((screen) => (
                <img
                  key={screenshot.id}
                  src={smallImage(screen.image, 640)}
                  alt="game_screenshot"
                />
              ))}
            </div>
          </GameDetailStyles.Detail>
        </GameDetailStyles.CardShadow>
      )}
    </>
  );
};

export default GameDetail;
