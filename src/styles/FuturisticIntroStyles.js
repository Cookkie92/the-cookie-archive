// styles/FuturisticIntroStyles.js
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SplitSection = styled.section`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.lightText};
  position: relative;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
`;

export const AboutColumn = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.test};
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
`;

export const CarouselColumn = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  height: 100%;
  width: ${(props) => props.projectCount * 100}%;
  transform: translateX(${(props) => `-${props.index * 100}%`});
  transition: transform 1s ease-in-out;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  z-index: 2;
`;

export const SlideBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: left;
  filter: brightness(0.5);
  z-index: 0;
`;

export const Info = styled.div`
  z-index: 2;
  text-align: left;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px 30px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 10%,
    rgba(0, 0, 0, 0.9) 90%
  );
  border-radius: 12px;
  backdrop-filter: blur(4px);
  margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ScrollWrapper = styled.div`
  scroll-snap-type: y mandatory;
  scroll-padding-top: 80px;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

export const MotionSection = styled(motion.section)`
  min-height: 100vh;
  scroll-snap-align: start;
  padding: 100px 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bg})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
`;
