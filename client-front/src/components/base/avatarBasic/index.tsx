"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  WrapItem,
  Avatar,
  Button,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";

export default function AvatarBasic() {
  return (
    <>
      {/* <Menu>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
        <MenuButton as={MdOutlineSearch} colorScheme="none" color="black">
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu> */}
      {/* ****************************** */}

      <Menu>
        <MenuButton as={Button} colorScheme="none">
          <Box h={"100%"} gap={"2"} display={"flex"} alignItems={"center"}>
            <Avatar
              name="Usuario"
              src="https://demos.creative-tim.com/argon-dashboard-react/static/media/team-4-800x800.99c612eb.jpg"
              size="md"
            />
            <Text fontSize={"14px"}>Marcelo Rodrigues</Text>
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem>My profile</MenuItem>
          <MenuItem>Create</MenuItem>
          <MenuItem>Draft</MenuItem>
          <MenuItem>Settings</MenuItem>
          <Divider orientation="horizontal" h={"2px"} bg={"BRPR.20"} />
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
