"use client";

import ModuleManha from "@/components/modules/moduleDasboard/moduleManha";
import { Box, Button, Icon, useDisclosure } from "@chakra-ui/react";
import { PiBowlFoodFill } from "react-icons/pi";

export default function Janta() {
  const {
    isOpen: isOpenAddProducts,
    onOpen: onOpenAddProducts,
    onClose: onCloseAddProducts,
  } = useDisclosure();

  return (
    <>
      <Box
        h="100%"
        w="100%"
        p="2"
        bg="BRPR.10"
        // border="2px solid #000"
        borderRadius={"20px"}
      >
        <Box
          h="10%"
          w="100%"
          gap={"4"}
          color={"AZUL.30"}
          fontSize={"16px"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box fontWeight={"bold"}>Jantar</Box>
          <Box>
            <Icon
              as={PiBowlFoodFill}
              w="25px"
              h="25px"
              // color={"BRPR.20"}
              display="center"
              alignItems="center"
              justifyContent="center"
            />
          </Box>
        </Box>
        <Box
          h="60%"
          w="100%"
          mt={"2"}
          color={"BRPR.20"}
          textStyle="text3"
          display={"block"}
          alignItems={"center"}
        >
          <Box>3 - Ovos mexidos com farinha</Box>
          <Box>1 - Café com Leite</Box>
          <Box>250g - Melão</Box>
          <Box>100g - Morango</Box>
        </Box>
        <Box
          h="30%"
          w="100%"
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Button
            w="30%"
            h="60%"
            bg={"AZUL.30"}
            color={"BRPR.10"}
            borderRadius="10px"
            onClick={() => {
              onOpenAddProducts();
            }}
            _hover={{
              bg: "AZUL.40",
              color: "BRPR.10",
            }}
          >
            <Box
              p="1"
              fontSize={"14px"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              Receita
            </Box>
          </Button>
        </Box>
      </Box>

      <ModuleManha
        openModal={isOpenAddProducts}
        closeModal={onCloseAddProducts}
      />
    </>
  );
}
