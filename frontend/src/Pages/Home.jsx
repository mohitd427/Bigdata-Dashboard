import { Box } from '@chakra-ui/react'
import React from 'react'
// import {bgImage} from '../Images/bogDataImg.jpg'

const Home = () => {
  return (
    <Box
      pos="relative"
      h="100vh"
      bg="rgba(255,0,0,0.1)"
      _before={{
        content: '""',
        bgImage:
          "url(https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-data-the-internet-cloud-network-calculation-method-image_15285.jpg)",
        bgSize: "cover",
        pos: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 1.9,
      }}
    >
      Home
    </Box>
  );
}

export default Home