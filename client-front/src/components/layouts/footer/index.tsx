"use client";

import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box
        h="100%"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box p={"2px"} color={"BRPR.10"}>
          <Text>© 2023 MM dev. All rights reserved</Text>
        </Box>
        {/* <Box>Alguma coisa</Box> */}
      </Box>
    </>
  );
}
