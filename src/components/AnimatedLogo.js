// AnimatedLogo.js
import React from "react";
import logo from "../images/cookielogo3.png";
import { LogoLink, LogoWrapper, LogoImage } from "../styles/AnimatedLogoStyles";

const AnimatedLogo = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LogoLink to="/" onClick={handleClick}>
      <LogoWrapper
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        whileHover={{
          rotate: [0, -6, 6, 0],
          scale: 1.05,
          transition: { duration: 0.6 },
        }}
      >
        <LogoImage
          src={logo}
          alt="The Cookie Archive Logo"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
      </LogoWrapper>
    </LogoLink>
  );
};

export default AnimatedLogo;
