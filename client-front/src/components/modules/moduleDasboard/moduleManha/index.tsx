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
              <Box display="center" alignItems="center" justifyContent="center">
                Ingredientes
              </Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box display={"block"} textStyle="text3">
                <Box>
                  1 colher de sopa de manteiga sem sal 1 colher de sopa mais
                </Box>
                <Box>1 xícara de chá de farinha de trigo</Box>
                <Box>3 ovos</Box>
                <Box>1 e 1/2 xícara de chá de açúcar</Box>
                <Box>3/4 xícara de chá de óleo vegetal</Box>
                <Box>3/4 xícara de chá de leite integral</Box>
                <Box>3/4 xícara de chá de fubá</Box>
                <Box>1/2 xícara de chá de amido de milho</Box>
                <Box>
                  1 colher de sopa de fermento químico em pó (fermento para
                  bolo)
                </Box>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Box textStyle="text1">Bom dia!</Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
