import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import Chair from "../../assets/images/heroChair.svg";
import React from "react";

const Hero = () => {
  return (
    <Box
      py={"50px"}
      border={"1px solid black"}
      backgroundColor={"rgba(219, 208, 204, 0.8)"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={"auto"}
        maxW={"1050px"}
      >
        <Image src={Chair} />
        <Box>
          <Heading color={"brand.200"} fontSize={"22px"}>
            HOT DEALS THIS WEEK
          </Heading>
          <br />
          <Heading color={"brand.400"} fontSize={"44px"}>
            SALE UP 50% MODERN FURNITURE
          </Heading>
          <Button
            color={"brand.200"}
            w={"120px"}
            h={"42px"}
            border={"1px solid #323334"}
            backgroundColor={"transparent"}
            mt={"25px"}
            fontSize={"14px"}
            fontWeight={"bold"}
          >
            VIEW NOW
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
