import { motion } from "framer-motion";
import styled from "styled-components";
import SideMenu from "./SideMenuBar";
import TopMenu from "./TopMenu";
import Arrow from "./Arrow";
import { HashLink } from "react-router-hash-link";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const backgroundImg = require("./img/backgroundImg.png")

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-repeat: repeat;
  background-image: url(${backgroundImg});
  font-weight: 500;
`;

const TextBox = styled.div`
  height: 90%;
  display: flex;
  margin-left: 7rem;
`;

const FirstWrapper = styled(motion.div)`
  flex: 2;
  align-self: flex-end;
  margin-bottom: 80px;
`;

const Content = styled(motion.p)`
  font-size: 8rem;
`;

const Contents = styled(motion.div)`
  width: 100%;
`;

const SecondWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ArrowWrap = styled(motion.div)`
  height: 70%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const ContactWrapper = styled(motion.div)`
  height: 30%;
  display: flex;
  justify-content: right;
`;

const Contact = styled(motion.div)`
  align-self: flex-end;
  height: 180px;
  width: 250px;
  position: relative;
  background-image: url(${backgroundImg});
  color: white;
  text-align: right;

  &:after {
    content: "";
    position: absolute;
    border-bottom: 180px solid black;
    border-left: 120px solid transparent;
    left: -3px;
    top: -1px;
  }

  a:hover, a:visited, a:link, a:active {
      text-decoration: none;
  }

  div {
    margin-left: 115px;
    height: 99%;
    width: 60%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  
    p {
      color: #FFFFFF;
      text-decoration: none;
      margin-bottom: 30px;
      font-weight: 800;
    }
  }
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.5
    }
  }
}

const ArrowVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.5
    }
  }
}

const textVariants = {
  start: {
    opacity: 0,
    y: -10
  },
  end: {
    opacity: 1,
    y: 0,
  },
}

function Main() {
  return (
    <Wrapper id="menu">
      <Contents>
        <SideMenu />
        <TopMenu />
        <TextBox>
          <FirstWrapper
            variants={boxVariants} initial="start" animate="end"
          >
            <Content variants={textVariants}>Hi,</Content>
            <Content variants={textVariants}>My name is Yugy</Content>
          </FirstWrapper>
          <SecondWrapper
            variants={ArrowVariants}
            initial="start"
            animate="end"
          >
            <ArrowWrap>
              <HashLink smooth to="#about" style={{ textDecoration: 'none' }} >
                <Arrow />
              </HashLink>
            </ArrowWrap>
            <ContactWrapper>
              <Contact>
                <a href="mailto:yugy.yugyeong.gmail.com">
                  <div>
                    <FontAwesomeIcon style={{ "marginBottom": "8px", "fontSize": "30px" }} icon={faPaperPlane} />
                    <p>Contact me</p>
                  </div>
                </a>
              </Contact>
            </ContactWrapper>
          </SecondWrapper>
        </TextBox>
      </Contents>
    </Wrapper >
  );
}

export default Main;