"use client";

import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";

export default function CardInformation() {
  return (
    <>
      <Box
        h="100px"
        w="33%"
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
            <Text>Traffic</Text>
            <Text>350,897</Text>
          </Box>
          <Box>
            <Button
              w="60px"
              h="60px"
              bg={"VERD.30"}
              borderRadius="50%"
              onClick={() => {
                // onOpenAddProducts();
              }}
              // _hover={{
              //   bg: "Vnone",
              // }}
            >
              <Icon
                as={FaUsers}
                w="30px"
                h="30px"
                color={"BRPR.10"}
                display="center"
                alignItems="center"
                justifyContent="center"
              />
            </Button>
          </Box>
        </Box>
        <Box h="20%" mt="5px" display={"flex"} alignItems={"center"}>
          <Text fontSize={"12px"}> 3.48% Since last month</Text>
        </Box>
      </Box>
    </>
  );
}
