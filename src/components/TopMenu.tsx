import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

//header
const Header = styled.div`
  display: flex;
  margin-top: 30px;
  font-size: 20px;
  width: 99%;
  justify-content: space-between;
  color: black;
`;

const Menu = styled(motion.div)`
`;

const HireMeLogo = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const HireMe = styled.div`
  animation: ${HireMeLogo} 8s linear infinite;
`;

function Main() {
  return (
    <>
      <Header>
        <Menu>

        </Menu>
        <HireMe
        >
            <svg viewBox="0 0 100 100" width="100" height="100">
              <defs>
                <path id="circle"
                  d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fontSize="17">
                <textPath xlinkHref="#circle">
                  HIRE ME HIRE ME HIRE ME HIRE
                </textPath>
              </text>
            </svg>
        </HireMe>
      </Header>
    </>
  );
}

export default Main;