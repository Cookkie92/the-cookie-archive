// AnimatedLogo.js
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../images/cookielogo.png";

const LogoWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const Squirrel = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const Cookie = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(#f3d6a2 60%, #7a4c14 62%);
  box-shadow: 0 0 5px #0004;
  z-index: 1;
`;

const AnimatedLogo = () => {
  return (
    <LogoWrapper>
      <Squirrel
        src={logo}
        alt="Squirrel"
        initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
        whileHover={{
          rotate: [0, -8, 4, 0],
          scale: 1.05,
          transition: { duration: 0.6 },
        }}
      />
      <Cookie
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 200 }}
      />
    </LogoWrapper>
  );
};

export default AnimatedLogo;
