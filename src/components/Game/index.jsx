import React from "react";
// style and animation
import { StyledGame } from "./style/GameStyles";
import { motion } from "framer-motion";
import { smallImage } from "../../util";
import { popUp } from "../../animations";

// redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../../actions/detailAction";

// router
import { Link } from "react-router-dom";

const Game = ({ name, released, id, image }) => {
  const stringPathId = id.toString();
  // load details handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      onClick={loadDetailHandler}
      layoutId={stringPathId}
      variants={popUp}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

export default Game;
