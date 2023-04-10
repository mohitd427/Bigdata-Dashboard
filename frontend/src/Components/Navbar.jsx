import { ColorModeContext, Flex ,Text} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom'
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  return (
    <>
      <ColorModeSwitch/>
      <Flex
        bg={"red.200"}
        justifyContent="space-around"
        alignItems={"center"}
        h="40px"
      >
        <Link to="/">
          <Text>BIG DATA</Text>
        </Link>
        <Link to="/dashboard">
          <Text>Dashboard</Text>
        </Link>
      </Flex>
    </>
  );
}

export default Navbar
