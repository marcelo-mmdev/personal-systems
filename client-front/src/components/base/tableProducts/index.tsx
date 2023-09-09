"use client";

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function TableProducts() {
  return (
    <>
      {/* <Box w="100%" h="100%"> */}
      <TableContainer
        borderRadius="8px"
        height="100%"
        width={"100%"}
        bg="AMAR.10"
        // overflowY="scroll"
        border="2px solid #B3B3B375"
      >
        <Table
          variant="striped"
          colorScheme="white"
          borderRadius="10px"
          // overflowY="scroll"
          // height="50px"
        >
          <Thead border="1px solid #B3B3B375">
            <Tr bg="CINZ.60">
              <Th
                position="sticky"
                top="0"
                zIndex="sticky"
                color="#ffffff"
                bg="CINZ.60"
                width="20px"
              >
                Qt
              </Th>
              <Th
                position="sticky"
                top="0"
                zIndex="sticky"
                color="#ffffff"
                bg="CINZ.60"
                width="20px"
              >
                Produto
              </Th>
              <Th
                position="sticky"
                top="0"
                zIndex="sticky"
                color="#ffffff"
                bg="CINZ.60"
                width="20px"
              >
                PÇ/UN
              </Th>
              <Th
                position="sticky"
                top="0"
                zIndex="sticky"
                color="#ffffff"
                bg="CINZ.60"
                width="20px"
              >
                Total
              </Th>
              {/* <Th
                  position="sticky"
                  top="0"
                  zIndex="sticky"
                  color="#ffffff"
                  bg="CINZ.60"
                  width="20px"
                >
                  Telefone
                </Th>
                <Th
                  position="sticky"
                  top="0"
                  zIndex="sticky"
                  color="#ffffff"
                  bg="CINZ.60"
                  width="20px"
                >
                  Endereço
                </Th>
                <Th
                  position="sticky"
                  top="0"
                  zIndex="sticky"
                  color="#ffffff"
                  bg="CINZ.60"
                  width="20px"
                >
                  Cep
                </Th> */}
            </Tr>
          </Thead>

          <Tbody>
            {/* <Tr>
                <Td borderBottom="0px">id</Td>
                <Td borderBottom="0px">credor</Td>
                <Td borderBottom="0px">nome</Td>
                <Td borderBottom="0px">fone</Td>
                <Td borderBottom="0px">endereco</Td>
                <Td borderBottom="0px">cep</Td>
              </Tr> */}
            <Tr fontSize={"10px"}>
              <Td>07</Td>
              <Td>Arroz</Td>
              <Td>R$: 5,40</Td>
              <Td>R$: 37,80</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
            <Tr fontSize={"10px"}>
              <Td>03</Td>
              <Td>Feijão</Td>
              <Td>R$: 8,99</Td>
              <Td>R$: 26,97</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
            <Tr fontSize={"10px"}>
              <Td>10</Td>
              <Td>Café</Td>
              <Td>R$: 13,99</Td>
              <Td>R$: 139,90</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
            <Tr fontSize={"10px"}>
              <Td>09</Td>
              <Td>Farinha</Td>
              <Td>R$: 1,99</Td>
              <Td>R$: 17,91</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
            <Tr fontSize={"10px"}>
              <Td>50</Td>
              <Td>Cerveja</Td>
              <Td>R$: 3,99</Td>
              <Td>R$: 199,50</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
            <Tr fontSize={"10px"}>
              <Td>07</Td>
              <Td>Arroz</Td>
              <Td>R$: 5,40</Td>
              <Td>R$: 37,80</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
            <Tr fontSize={"10px"}>
              <Td>03</Td>
              <Td>Feijão</Td>
              <Td>R$: 8,99</Td>
              <Td>R$: 26,97</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
            <Tr fontSize={"10px"}>
              <Td>10</Td>
              <Td>Café</Td>
              <Td>R$: 13,99</Td>
              <Td>R$: 139,90</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
            <Tr fontSize={"10px"}>
              <Td>09</Td>
              <Td>Farinha</Td>
              <Td>R$: 1,99</Td>
              <Td>R$: 17,91</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
            <Tr fontSize={"10px"}>
              <Td>50</Td>
              <Td>Cerveja</Td>
              <Td>R$: 3,99</Td>
              <Td>R$: 199,50</Td>
              {/* <Td>fone</Td>
                <Td>endereco</Td>
                <Td>cep</Td> */}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      {/* <TableContainer>
          <Table
            variant="striped"
            colorScheme="linkedin"
            // scrollBehavior={"auto"}
            scrollMarginY={"auto"}
            scrollMarginX={"auto"}
          >
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer> */}
      {/* </Box> */}
    </>
  );
}
