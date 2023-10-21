"use client";

import Menu from "@/components/layouts/menu";
import { Box } from "@chakra-ui/react";

export default function Mercado() {
  return (
    <>
      <Box h="100vh" w="100vw" p="2%" bg="CINZ.30" display={"flex"}>
        <Box
          h="100%"
          w="10%"
          bg="BRPR.10"
          border={"2px solid #b3b3b375"}
          borderRadius={"20px"}
        >
          <Menu />
        </Box>
        <Box w="2%" />
        <Box h="100%" w="88%" bg="BRPR.10" borderRadius={"20px"}>
          2000000000000
        </Box>
      </Box>
    </>
  );
}
