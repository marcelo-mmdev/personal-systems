"use client";

import Calendario from "@/components/base/calendario";
import CardInformation from "@/components/base/cardInformation";
import Almoco from "@/components/base/cardapio/almoco";
import Janta from "@/components/base/cardapio/janta";
import Manha from "@/components/base/cardapio/manha";
import { Graphics } from "@/components/base/graphics";
import TableProducts from "@/components/base/tableProducts";
import Menu from "@/components/layouts/menu";
import { Box } from "@chakra-ui/react";

export default function Dashboard() {
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
        <Box h="100%" w="70%">
          <Box h="40%" w="100%" p="0 0 0 2%" display={"flex"}>
            <Box
              h="100%"
              w="50%"
              p="15px"
              bg="BRPR.10"
              // border={"2px solid #b3b3b375"}
              borderRadius={"20px"}
            >
              <Graphics />
            </Box>
            <Box h="100%" w="50%" p="0 0 0 2%">
              <TableProducts />
            </Box>
          </Box>
          <Box h="40%" w="100%" p="2% 0 0 2%" borderRadius={"20px"}>
            <TableProducts />
          </Box>
          <Box
            h="20%"
            w="100%"
            p="2% 0 0 2%"
            display={"flex"}
            borderRadius={"20px"}
          >
            <Box h="100%" w="25%">
              <CardInformation />
            </Box>
            <Box h="100%" w="25%" p="0 0 0 2%">
              <Manha />
            </Box>
            <Box h="100%" w="25%" p="0 0 0 2%">
              <Almoco />
            </Box>
            <Box h="100%" w="25%" p="0 0 0 2%">
              <Janta />
            </Box>
          </Box>
        </Box>
        <Box w="2%" />
        <Box
          h="100%"
          w="18%"
          bg="BRPR.10"
          display={"block"}
          // border={"2px solid #b3b3b375"}
          borderRadius={"20px"}
        >
          <Box h="40%" w="100%">
            <Calendario />
          </Box>
          <Box h="40%" w="100%">
            <Box mt="2" color="BRPR.20" textStyle="text2">
              15/09/2023
            </Box>
            <Box mt="2" color="BRPR.20" textStyle="text2">
              Agenda e Lembrete
            </Box>
            <Box mt="2" color="BRPR.20" textStyle="text2">
              15/09/2023
            </Box>
            <Box mt="2" color="BRPR.20" textStyle="text2">
              Agenda e Lembrete
            </Box>
          </Box>
          <Box h="20%" w="100%">
            Horoscopo
          </Box>
        </Box>
      </Box>
    </>
  );
}
