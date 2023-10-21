"use client";

import AvatarBasic from "@/components/base/avatarBasic";
import { Box, Button, Icon } from "@chakra-ui/react";
// import Link from 'next/link';
import { useState } from "react";
import {
  FcGlobe,
  FcServices,
  FcPodiumWithSpeaker,
  FcStatistics,
  FcCloseUpMode,
  FcShop,
  FcHome,
  FcAutomotive,
  FcPlanner,
  FcSportsMode,
} from "react-icons/fc";
import { MdRestaurantMenu } from "react-icons/md";

export default function Menu() {
  const [selecionado, setSelecionado] = useState("");

  return (
    <>
      <Box
        h="100%"
        w="100%"
        display={"block"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          h="20%"
          w="100%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Logo
        </Box>
        <Box
          h="60%"
          w="100%"
          // pl={"10%"}
          display={"block"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* 
          <Link 
            onClick={() => {setSelecionado(1)}} 
            className={selecionado === 1 ? "menuSelecionado" : ""} 
            to="/"> 
              <AiOutlineHome color="#7B68EE" className="icone" />
                HOME
          </Link> 
          */}

          {/* <Box p={"3% 5% 3% 5%"}>
            <Link
              to={"/mercado"}
              // w="100%"
              // h="100%"
              // gap="4"
              // bg={"none"}
              // borderRadius={"8px"}
              // // color={"VERD.30"}
              // display="flex"
              // alignItems="center"
              // justifyContent={"center"}
              onClick={() => {
                // setSelecionado(1)
              }}
              // _hover={{
              //   bg: "AZUL.30",
              //   color: "BRPR.10",
              //   padding: "5px",
              // }}
            >
              <Icon as={FcHome} w="25px" h="25px" />
              Home
            </Link>
          </Box> */}
          <Box p={"3% 5% 3% 5%"}>
            <Box
              w="100%"
              h="100%"
              gap="4"
              bg={"none"}
              borderRadius={"8px"}
              // color={"VERD.30"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.30",
                color: "BRPR.10",
                padding: "5px",
              }}
            >
              <Icon as={FcPlanner} w="25px" h="25px" />
              Agenda
            </Box>
          </Box>
          <Box p={"3% 5% 3% 5%"}>
            <Box
              w="100%"
              h="100%"
              gap="4"
              bg={"none"}
              borderRadius={"8px"}
              // color={"VERD.30"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.30",
                color: "BRPR.10",
                padding: "5px",
              }}
            >
              <Icon as={FcPodiumWithSpeaker} w="25px" h="25px" />
              Cardápio
            </Box>
          </Box>
          <Box p={"3% 5% 3% 5%"}>
            <Box
              w="100%"
              h="100%"
              gap="4"
              bg={"none"}
              borderRadius={"8px"}
              // color={"VERD.30"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.30",
                color: "BRPR.10",
                padding: "5px",
              }}
            >
              <Icon as={FcStatistics} w="25px" h="25px" />
              Financeiro
            </Box>
          </Box>
          <Box p={"3% 5% 3% 5%"}>
            <Box
              w="100%"
              h="100%"
              gap="4"
              bg={"none"}
              borderRadius={"8px"}
              // color={"VERD.30"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.30",
                color: "BRPR.10",
                padding: "5px",
              }}
            >
              <Icon as={FcSportsMode} w="25px" h="25px" />
              Fitness
            </Box>
          </Box>
          <Box p={"3% 5% 3% 5%"}>
            <Box
              w="100%"
              h="100%"
              gap="4"
              bg={"none"}
              borderRadius={"8px"}
              // color={"VERD.30"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.30",
                color: "BRPR.10",
                padding: "5px",
              }}
            >
              <Icon as={FcCloseUpMode} w="25px" h="25px" />
              Meditação
            </Box>
          </Box>
          <Box p={"3% 5% 3% 5%"}>
            <Box
              w="100%"
              h="100%"
              gap="4"
              bg={"none"}
              borderRadius={"8px"}
              // color={"VERD.30"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.30",
                color: "BRPR.10",
                padding: "5px",
              }}
            >
              <Icon as={FcShop} w="25px" h="25px" />
              Mercado
            </Box>
          </Box>
          <Box p={"3% 5% 3% 5%"}>
            <Box
              w="100%"
              h="100%"
              gap="4"
              bg={"none"}
              borderRadius={"8px"}
              // color={"VERD.30"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.30",
                color: "BRPR.10",
                padding: "5px",
              }}
            >
              <Icon as={FcAutomotive} w="25px" h="25px" />
              Objetivos
            </Box>
          </Box>
          <Box p={"3% 5% 3% 5%"}>
            <Box
              w="100%"
              h="100%"
              gap="4"
              bg={"none"}
              borderRadius={"8px"}
              // color={"VERD.30"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.30",
                color: "BRPR.10",
                padding: "5px",
              }}
            >
              <Icon as={FcGlobe} w="25px" h="25px" />
              Planos
            </Box>
          </Box>
          <Box p={"3% 5% 3% 5%"}>
            <Box
              w="100%"
              h="100%"
              gap="4"
              bg={"none"}
              borderRadius={"8px"}
              // color={"VERD.30"}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.30",
                color: "BRPR.10",
                padding: "5px",
              }}
            >
              <Icon as={FcServices} w="25px" h="25px" />
              Settings
            </Box>
          </Box>
        </Box>
        <Box
          h="20%"
          w="100%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <AvatarBasic />
        </Box>
      </Box>
    </>
  );
}
