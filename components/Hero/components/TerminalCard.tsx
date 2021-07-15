import React from "react";
import { Container, Box } from "@chakra-ui/react";
import styles from "../../../styles/terminalCard.module.scss";
const TerminalCard = () => {
  return (
    <div>
      <Container>
        <Box className={styles.main}>
          <h1>Hello</h1>
        </Box>
      </Container>
    </div>
  );
};

export default TerminalCard;
