"use client";

import AvatarBasic from "@/components/base/avatarBasic";
import SearchBasic from "@/components/base/searchBasic";
import { Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box
        h="100%"
        p="15px"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>Dashboard</Box>
        <Box display={"flex"} alignItems={"center"} gap="5">
          <Box>
            <SearchBasic />
          </Box>
          <Box>
            <AvatarBasic />
          </Box>
        </Box>
      </Box>
    </>
  );
}
