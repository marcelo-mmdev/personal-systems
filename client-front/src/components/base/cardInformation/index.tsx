"use client";

import { Box, Button, Icon } from "@chakra-ui/react";
import { FcMoneyTransfer } from "react-icons/fc";

export default function CardInformation() {
  return (
    <>
      <Box
        h="100%"
        w="100%"
        p="16px"
        bg={"BRPR.10"}
        borderRadius={"10px"}
        display={"block"}
      >
        <Box
          h="80%"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"block"}>
            <Box textStyle="text2">Saldo da Conta do Mês</Box>
            <Box textStyle="text2">R$: 350,89</Box>
          </Box>
          <Box>
            <Button
              w="60px"
              h="60px"
              bg={"AZUL.30"}
              borderRadius="50%"
              onClick={() => {
                // onOpenAddProducts();
              }}
              _hover={{
                bg: "AZUL.40",
              }}
            >
              <Icon
                as={FcMoneyTransfer}
                w="30px"
                h="30px"
                // color={"BRPR.10"}
                display="center"
                alignItems="center"
                justifyContent="center"
              />
            </Button>
          </Box>
        </Box>
        <Box h="20%" mt="5px" display={"flex"} alignItems={"center"}>
          <Box fontSize={"14px"}> 3.48%</Box>
          <Box ml="10px" fontSize={"10px"}>
            Orçamento do Mês comparado ao Mês passado.
          </Box>
        </Box>
      </Box>
    </>
  );
}
