import React from "react";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../util";
import { popUp } from "../animations";

// redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

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

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
