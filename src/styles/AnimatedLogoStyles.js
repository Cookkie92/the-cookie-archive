// styles/AnimatedLogoStyles.js
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const LogoWrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
`;

export const LogoImage = styled(motion.img)`
  width: 100%;
  height: auto;
`;
