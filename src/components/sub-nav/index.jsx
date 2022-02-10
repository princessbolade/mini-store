import { Box, Flex, Image, Text } from "@chakra-ui/react";
import horizontalLine from "../../assets/images/horizontalLine.svg";
import React from "react";

const SubNav = () => {
  return (
    <>
      <Box mx={"auto"} maxW={"1300px"}>
        <Image src={horizontalLine} />
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"brand.200"}
          mx={"auto"}
          maxW={"1050px"}
          py={"30px"}
        >
          <Text fontSize={"16px"} fontWeight={"bold"}>
            HOME
          </Text>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            STORE
          </Text>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            ACCESSORIES
          </Text>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            BRAND
          </Text>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            PAGES
          </Text>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            ABOUT US
          </Text>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            NEWS
          </Text>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            CONTACT US
          </Text>
        </Flex>
        <Image src={horizontalLine} />
      </Box>
    </>
  );
};

export default SubNav;
