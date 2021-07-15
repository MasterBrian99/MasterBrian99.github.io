import React from "react";
import { Container, Box, Text, Code, Grid, GridItem } from "@chakra-ui/react";
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
          <Text color="#2E7DAF" fontWeight="bold">
            Looking for a Developer ?
          </Text>
          <Text fontSize="6xl" color="#ffffff" fontFamily="Montserrat">
            Web Application Developer and Designer
          </Text>
        </Box>
        <Box w="100%" h="10">
          <Text>Hello</Text>
        </Box>
      </Grid>
    </Container>
  );
};

export default Hero;

// fontFamily = "Montserrat";
