import React from "react";
import {
  Container,
  Box,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
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
            <Box display="flex">
              <h1 className={styles.mainTerminalText}>
                [pasindu@portfolio ~]${" "}
              </h1>
              <p className={styles.installCode}> yarn add pasindu-pramodaya</p>
            </Box>
            <Box display="flex" flexDir="column" className={styles.lineCode}>
              <p>[1/4] Resolving packages...</p>
              <p>[2/4] Fetching packages...</p>
              <p>[3/4] Linking dependencies...</p>
              <p>[4/4] Building fresh packages...</p>
              <p>
                <Tag borderRadius="full" variant="solid" colorScheme="green">
                  success
                </Tag>{" "}
                Saved lockfile.
              </p>
              <p>
                <Tag borderRadius="full" variant="solid" colorScheme="green">
                  success
                </Tag>{" "}
                Saved 1 new dependency.
              </p>
              <p>Done in 4.69s.</p>
              <h1>[pasindu@portfolio ~]$ </h1>
            </Box>
          </Box>
        </Tilt>
      </Container>
    </div>
  );
};

export default TerminalCard;
