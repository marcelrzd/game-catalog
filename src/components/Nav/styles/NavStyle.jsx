import styled from "styled-components";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    border-radius: 1.3rem;
    width: 45%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    width: 200px;
    margin-left: -4%;
    font-size: 1.5rem;
    border-radius: 1.3rem;
    border: none;
    padding: 0.55rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
  @media (max-width: 1300px) {
    input {
      width: 45%;
    }
    button {
      width: 180px;
      /* margin-left: 0; */
    }
  }
  @media (max-width: 1100px) {
    button {
      width: 150px;
    }
  }
  @media (max-width: 815px) {
    input {
      width: 100%;
    }
    button {
      width: 100%;
      margin-left: 0;
    }
  }
`;

const StyledFilter = styled(motion.div)`
  padding: 3rem 2rem;
  .active {
    background: #ff7676;
    color: white;
  }
  li {
    font-weight: bold;
    display: inline;
    border-radius: 1.3rem;
    border: none;
    padding: 0.5rem 3rem;
    cursor: pointer;
    transition: background 0.75s ease, color 0.3s ease;
  }
  li:hover {
    border-radius: 1.3rem;
    border: none;
    padding: 0.5rem 3rem;
    background: #ff7676;
    color: white;
    transition: background 0.75s ease, color 0.3s ease;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 18px;
  cursor: pointer;
  img {
    margin-right: 1%;
    height: 2rem;
    width: 2rem;
  }
`;

export default {
  StyledNav,
  Logo,
  StyledFilter,
};
