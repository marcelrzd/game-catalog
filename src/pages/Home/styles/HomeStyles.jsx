import styled from "styled-components";
import { motion } from "framer-motion";

const GameList = styled(motion.div)`
  margin-top: -6%;
  padding: 0rem 5rem;
  h2 {
    padding: 2rem 0rem;
  }
  @media (max-width: 1000px) {
    h2 {
      text-align: center;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    overflow: hidden;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 655px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

export default {
  GameList,
  Games,
};
