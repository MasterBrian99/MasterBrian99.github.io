import React from "react";
import { Container, Box, Text, Grid } from "@chakra-ui/react";
import TerminalCard from "./components/TerminalCard";

const Hero = () => {
  return (
    <Container
      maxW="container.xl"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignContent="flex-end"
      pt="40"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box w="100%" h="10">
          <Text
            color="#1390EB"
            fontWeight="bold"
            animation="moveInRight  ease-out 1s"
          >
            Looking for a Developer ?
          </Text>
          <Text
            fontSize="6xl"
            color="#ffffff"
            fontFamily="Montserrat"
            animation="moveInLeft ease-out 1s"
          >
            Web Application Developer and Designer
          </Text>
          <Text
            fontSize="2xl"
            color="#ffffff"
            animation="moveInButton ease-in 1s"
          >
            A Designer That Improve The Quality Of Life Of Millions Of People.
          </Text>
        </Box>
        <Box w="100%" h="10">
          <TerminalCard />
        </Box>
      </Grid>
    </Container>
  );
};

export default Hero;

// fontFamily = "Montserrat";
