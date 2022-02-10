import { Box, Flex, Heading, Image, Button, Stack } from "@chakra-ui/react";
import ProdChair from "../../assets/images/prodChair.svg";
import ProdPottery from "../../assets/images/prodPottery.svg";
import React from "react";

const ProductHero = () => {
  return (
    <Box mx={"auto"} maxW={"1200px"} py={"50px"}>
      <Flex color={"brand.200"}>
        <Box>
          <Stack
            direction={"row"}
            spacing={"12px"}
            alignItems={"center"}
            backgroundColor={"rgba(250, 250, 250, 1)"}
          >
            <Image src={ProdChair} w="350px" h="350px" />
            <Box>
              <Heading fontSize={"28px"}>INY VINTAGE CHAIR</Heading>
              <Button
                w={"120px"}
                h={"42px"}
                border={"1px solid #323334"}
                backgroundColor={"transparent"}
                mt={"25px"}
                fontSize={"14px"}
                fontWeight={"bold"}
              >
                VIEW DETAILS
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"12px"}
            ml={"30px"}
            backgroundColor={"rgba(234, 233, 231, 1)"}
          >
            <Image src={ProdPottery} w="246px" h="348px" />
            <Box>
              <Heading fontSize={"28px"}>LARGE TERRACOTA VASE</Heading>
              <Button
                w={"120px"}
                h={"42px"}
                border={"1px solid #323334"}
                backgroundColor={"transparent"}
                mt={"25px"}
                fontSize={"14px"}
                fontWeight={"bold"}
              >
                VIEW DETAILS
              </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductHero;
