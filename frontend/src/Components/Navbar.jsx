import {  Box, Flex ,Text} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom'
import ColorModeSwitch from './ColorModeSwitch';


const Navbar = () => {
  return (
    <>
      {/* <ColorModeSwitch/> */}
      <Flex
        bg={"red.200"}
        justifyContent="space-around"
        alignItems={"center"}
        h="40px"
        fontFamily={'fantasy'}
      >
        <Flex alignItems={"center "}>
          <Text fontSize={"xl"}>Toggle Mode</Text>
          <ColorModeSwitch />
        </Flex>
        <Link to="/">
          <Text fontSize={"xl"}>BIG DATA</Text>
        </Link>
        <Link to="/dashboard">
          <Text fontSize={"xl"}>Dashboard</Text>
        </Link>
      </Flex>
    </>
  );
}

export default Navbar
