import { Box, Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";
import prodBedSheet from "../../assets/images/prodBedSheet.svg";
import React from "react";

function ProdAdvert() {
  return (
    <>
      <Box
        backgroundImage={prodBedSheet}
        py={"200px"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <Flex
          mx={"auto"}
          maxW={"540px"}
          h={"240px"}
          alignItems={"start"}
          justifyContent={"center"}
          backgroundColor={"rgba(255, 255, 255, 0.9)"}
        >
          <Box>
            <Stack alignItems={"start"} direction={"column"} py={"50px"}>
              <Heading color={"brand.200"}>BEDSHEET SETS</Heading>
              <Heading color={"rgba(123, 81, 54, 1)"}>$50.00</Heading>
              <Text color={"brand.200"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </Text>
              <Button
                w={"120px"}
                h={"42px"}
                color={"brand.200"}
                border={"1px solid #323334"}
                backgroundColor={"transparent"}
                mt={"25px"}
                fontSize={"14px"}
                fontWeight={"bold"}
              >
                VIEW DETAILS
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default ProdAdvert;
