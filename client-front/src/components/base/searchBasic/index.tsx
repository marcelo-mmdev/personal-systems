"use client";

import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchBasic() {
  return (
    <>
      <Box>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={MdOutlineSearch} w="20px" h="20px" color={"BRPR.10"} />
            </InputLeftElement>
            <Input type="text" placeholder="Search" borderRadius={"50px"} />
          </InputGroup>
        </Stack>
      </Box>
    </>
  );
}
