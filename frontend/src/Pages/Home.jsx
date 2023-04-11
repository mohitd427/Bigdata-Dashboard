import { Box, Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
// import {bgImage} from '../Images/bogDataImg.jpg'

const Home = () => {
  return (
    <Box
      pos="relative"
      h="100vh"
      bg="rgba(255,0,0,0.1)"
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      _before={{
        content: '""',
        bgImage:
          // "url(https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-data-the-internet-cloud-network-calculation-method-image_15285.jpg)",
          "url(https://png.pngtree.com/background/20210709/original/pngtree-big-data-background-picture-image_684821.jpg)",
        bgSize: "cover",
        pos: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.5,
      }}
    >
      <Box
        display="flex"
        flexDir={"column"}
        alignItems={"center"}
        justifyContent="center"
        bg={"red.300"}
        borderRadius="20px"
        padding={"50px 100px"}
      >
        <Heading color={"black"}>Welcome To Big Data</Heading>
        <Link to='/dashboard'>
          <Button onClick={'/dashboard'} mt={"20px"} colorScheme={"whatsapp"}>
            Visit Dashboard
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Home