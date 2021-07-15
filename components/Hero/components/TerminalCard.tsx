import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";
import { AiFillCloseCircle, AiOutlineFullscreen } from "react-icons/ai";
import { FaRegWindowMinimize } from "react-icons/fa";
import styles from "../../../styles/terminalCard.module.scss";
const TerminalCard = () => {
  return (
    <div>
      <Container>
        <Tilt tiltAngleYInitial={40}>
          <Box className={styles.main}>
            <Box
              className={styles.topBar}
              display="flex"
              flexDirection="row-reverse"
              justifyContent="flex-start"
              alignItems="center"
            >
              <AiFillCloseCircle
                size={30}
                color={"#910000"}
                className={styles.dot}
              />
              <AiOutlineFullscreen
                size={30}
                color={"#fffb00"}
                className={styles.dot}
              />

              <FaRegWindowMinimize
                size={30}
                color={"#00ff55"}
                className={styles.dot}
              />
              {/* <span className={styles.dot}>·</span> */}
            </Box>
            <h1>Hello</h1>
          </Box>
        </Tilt>
      </Container>
    </div>
  );
};

export default TerminalCard;
