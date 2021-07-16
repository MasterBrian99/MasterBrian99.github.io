import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { DiJavascript1 } from "react-icons/di";
const InfoCard = () => {
  return (
    <Box
      position="absolute"
      top={-100}
      left={0}
      width="6rem"
      height="6rem"
      backgroundColor="#e91e63"
      boxShadow="0px 0px 15px 0px rgba(19,144,235,0.72);"
      borderRadius="10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="-1"
    >
      <DiJavascript1 size={70} color={"#fff"} />
    </Box>
  );
};

export default InfoCard;
