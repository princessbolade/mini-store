import { Box, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import Search from "../../assets/nav-icons/search.svg";
import Avatar from "../../assets/nav-icons/avatar.svg";
import Cart from "../../assets/nav-icons/cart.svg";
import Favorite from "../../assets/nav-icons/favorite.svg";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box mx={"auto"} maxW={"1300px"} py={"20px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading color={"brand.200"} fontSize={"28px"}>
            MOODY STUDIO
          </Heading>
          <Box>
            <Stack direction={"row"} spacing={"24px"}>
              <Link>
                <Image src={Search} w={"25px"} h={"25px"} />
              </Link>
              <Link>
                <Image src={Avatar} w={"25px"} h={"25px"} />
              </Link>
              <Link>
                <Image src={Cart} w={"25px"} h={"25px"} />
              </Link>
              <Link>
                <Image src={Favorite} w={"25px"} h={"25px"} />
              </Link>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
