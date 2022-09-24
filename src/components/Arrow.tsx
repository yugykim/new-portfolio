import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";
const ArrowWrap = styled(motion.div)`
`;

export default function Arrow() {
  return (
    <ArrowWrap
    whileHover={{ 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.5,
        delayChildren: 1,
        staggerChildren: 0.5
      },
      x: 10
     }}
  >
    <FontAwesomeIcon 
      style={{ fontSize: "80px", marginRight: "30px", color: "white"}} 
      icon={faArrowRight} 
    />
  </ArrowWrap>
  );
}