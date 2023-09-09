"use client";

import ModuleManha from "@/components/modules/moduleDasboard/moduleManha";
import { Box, Button, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { MdLocalCafe } from "react-icons/md";

export default function Manha() {
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
        bg="CINZ.50"
        border="2px solid #000"
        borderRadius={"8px"}
      >
        <Box
          h="10%"
          w="100%"
          gap={"4"}
          fontSize={"14px"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box>Café da Manha</Box>
          <Box>
            <Icon
              as={MdLocalCafe}
              w="25px"
              h="25px"
              color={"BRPR.20"}
              display="center"
              alignItems="center"
              justifyContent="center"
            />
          </Box>
        </Box>
        <Box
          h="70%"
          w="100%"
          mt={"2"}
          color={"BRPR.10"}
          fontSize={"12px"}
          display={"block"}
          alignItems={"center"}
        >
          <Text>3 - Ovos mexidos com farinha</Text>
          <Text>1 - Café com Leite</Text>
          <Text>250g - Melão</Text>
          <Text>100g - Morango</Text>
        </Box>
        <Box
          h="20%"
          w="100%"
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Button
            w="30%"
            h="80%"
            bg={"CINZ.30"}
            color={"BRPR.10"}
            borderRadius="10px"
            onClick={() => {
              onOpenAddProducts();
            }}
            _hover={{
              bg: "CINZ.20",
              color: "BRPR.10",
            }}
          >
            <Text
              p="1"
              fontSize={"14px"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              Receita
            </Text>
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
