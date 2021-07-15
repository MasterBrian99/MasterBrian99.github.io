import { Container } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Logo from "../../public/main/iconmonstr-random-thin.svg";
import ListItem from "./components/ListItem";

const NavigationLg = () => {
  return (
    <Container
      maxW="container.xl"
      fontFamily="Montserrat"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pt="2"
      color="#fff"
      fontSize="1.2rem"
    >
      <div style={{ paddingTop: "20px" }}>
        <Image src={Logo} alt="logo" width="50" height="50" />
      </div>
      <ListItem />
    </Container>
  );
};

export default NavigationLg;
