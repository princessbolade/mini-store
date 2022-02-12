import { Box, Flex, Heading, Text, Button, Stack } from "@chakra-ui/react";
import prodBackImg from "../../assets/images/prodBackImage.svg";
import prodImgLinen from "../../assets/images/prodImgLinen.svg";
import prodImgPlate from "../../assets/images/prodImgPlate.svg";
import prodImgBox from "../../assets/images/prodImgBox.svg";
import prodImgClearBox from "../../assets/images/prodImgClearBox.svg";
import prodImgJute from "../../assets/images/prodImgJute.svg";
import prodImgBask from "../../assets/images/prodImgBask.svg";
import prodImgBoho from "../../assets/images/prodImgboho.svg";
import React from "react";

const ProductHeroTwo = () => {
  return (
    <>
      <Box mx={"auto"} maxW={"1200px"} py={"50"}>
        <Flex
          color={"brand.500"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            backgroundImage={prodBackImg}
            backgroundColor={"rgba(0, 0, 0, 0.4)"}
            w={"306px"}
            h={"566px"}
            alignItems={"start"}
            justifyContent={"center"}
            px={"10px"}
            borderRadius={"10px"}
          >
            <Heading fontSize={"28px"}>DECOR</Heading>
            <Text fontSize={"16px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button
              w={"120px"}
              h={"42px"}
              border={"1px solid #FFFFFF"}
              backgroundColor={"transparent"}
              mt={"25px"}
              fontSize={"14px"}
              fontWeight={"bold"}
            >
              VIEW MORE
            </Button>
          </Stack>
          <Box ml={"10px"} color={"brand.200"}>
            <Box
              w={"306px"}
              h={"422px"}
              backgroundImage={prodImgLinen}
              borderRadius={"10px"}
            ></Box>
            <Text pt={"15px"} fontSize={"18px"} fontWeight={"bold"}>
              Linen Beach Towel
            </Text>
            <Text fontSize={"24px"} fontWeight={"bold"}>
              30$
            </Text>
          </Box>
          <Box ml={"10px"} color={"brand.200"}>
            <Box
              w={"306px"}
              h={"422px"}
              backgroundImage={prodImgBox}
              borderRadius={"10px"}
            ></Box>
            <Text pt={"15px"} fontSize={"18px"} fontWeight={"bold"}>
              Square Clear Glass Box
            </Text>
            <Text fontSize={"24px"} fontWeight={"bold"}>
              30$
            </Text>
          </Box>
          <Box ml={"10px"} color={"brand.200"}>
            <Box
              w={"306px"}
              h={"422px"}
              backgroundImage={prodImgPlate}
              borderRadius={"10px"}
            ></Box>
            <Text pt={"15px"} fontSize={"18px"} fontWeight={"bold"}>
              4-pack Small Ceramic Plates
            </Text>
            <Text fontSize={"24px"} fontWeight={"bold"}>
              30$
            </Text>
          </Box>
        </Flex>

        <Flex
          color={"brand.500"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={"20px"}
        >
          <Box color={"brand.200"}>
            <Box
              w={"306px"}
              h={"422px"}
              backgroundImage={prodImgClearBox}
              borderRadius={"10px"}
            ></Box>
            <Text pt={"15px"} fontSize={"18px"} fontWeight={"bold"}>
              Large Clear Glass Box
            </Text>
            <Text fontSize={"24px"} fontWeight={"bold"}>
              30$
            </Text>
          </Box>
          <Box ml={"10px"} color={"brand.200"}>
            <Box
              w={"306px"}
              h={"422px"}
              backgroundImage={prodImgJute}
              borderRadius={"10px"}
            ></Box>
            <Text pt={"15px"} fontSize={"18px"} fontWeight={"bold"}>
              Round Jute Placemat
            </Text>
            <Text fontSize={"24px"} fontWeight={"bold"}>
              30$
            </Text>
          </Box>
          <Box ml={"10px"} color={"brand.200"}>
            <Box
              w={"306px"}
              h={"422px"}
              backgroundImage={prodImgBask}
              borderRadius={"10px"}
            ></Box>
            <Text pt={"15px"} fontSize={"18px"} fontWeight={"bold"}>
              Metal Wire Basket
            </Text>
            <Text fontSize={"24px"} fontWeight={"bold"}>
              30$
            </Text>
          </Box>
          <Stack
            backgroundImage={prodImgBoho}
            backgroundColor={"rgba(0, 0, 0, 0.4)"}
            w={"306px"}
            h={"566px"}
            alignItems={"start"}
            justifyContent={"center"}
            px={"10px"}
            borderRadius={"10px"}
            ml={"10px"}
          >
            <Heading fontSize={"28px"}>BOHO CHIC</Heading>
            <Text fontSize={"16px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button
              w={"120px"}
              h={"42px"}
              border={"1px solid #FFFFFF"}
              backgroundColor={"transparent"}
              mt={"25px"}
              fontSize={"14px"}
              fontWeight={"bold"}
            >
              VIEW MORE
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default ProductHeroTwo;
