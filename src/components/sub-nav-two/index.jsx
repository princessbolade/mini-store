import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Shipping from "../../assets/nav-icons/shipping.svg";
import MoneyBack from "../../assets/nav-icons/moneyBack.svg";
import Support from "../../assets/nav-icons/support.svg";
import React from "react";

const SubNavTwo = () => {
  return (
    <>
      <Box mx={"auto"} maxW={"1050px"} py={"10px"}>
        <Flex
          color={"brand.300"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Flex alignItems={"center"}>
              <Image src={Shipping} />
              <Text ml={"15px"} fontWeight={"bold"} fontSize={"12px"}>
                FREE SHIPPING
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex alignItems={"center"}>
              <Image src={MoneyBack} />
              <Text ml={"15px"} fontWeight={"bold"} fontSize={"12px"}>
                100% MONEY BACK
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex alignItems={"center"}>
              <Image src={Support} />
              <Text ml={"15px"} fontWeight={"bold"} fontSize={"12px"}>
                SUPPORT 24/7
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SubNavTwo;
