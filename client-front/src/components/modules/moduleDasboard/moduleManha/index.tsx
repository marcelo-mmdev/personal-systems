"use client";

import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  openModal: boolean;
  closeModal: () => void;
}

export default function ModuleManha({ openModal, closeModal }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Modal isOpen={openModal} onClose={closeModal} isCentered>
          <ModalOverlay />
          <ModalContent bg={"BRPR.10"}>
            <ModalHeader color={"VERD.40"}>
              <Text
                display="center"
                alignItems="center"
                justifyContent="center"
              >
                Ingredientes
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box display={"block"} fontSize={"12px"}>
                <Text>
                  1 colher de sopa de manteiga sem sal 1 colher de sopa mais
                </Text>
                <Text>1 xícara de chá de farinha de trigo</Text>
                <Text>3 ovos</Text>
                <Text>1 e 1/2 xícara de chá de açúcar</Text>
                <Text>3/4 xícara de chá de óleo vegetal</Text>
                <Text>3/4 xícara de chá de leite integral</Text>
                <Text>3/4 xícara de chá de fubá</Text>
                <Text>1/2 xícara de chá de amido de milho</Text>
                <Text>
                  1 colher de sopa de fermento químico em pó (fermento para
                  bolo)
                </Text>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Text fontSize={"16px"}>Bom dia!</Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
