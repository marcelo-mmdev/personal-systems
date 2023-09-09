"use client";

import Calendario from "@/components/base/calendario";
import CardInformation from "@/components/base/cardInformation";
import Cardapio from "@/components/base/cardapio";
import Almoco from "@/components/base/cardapio/almoco";
import Janta from "@/components/base/cardapio/janta";
import Manha from "@/components/base/cardapio/manha";
import { Graphics } from "@/components/base/graphics";
import TableProducts from "@/components/base/tableProducts";
import ModuleDashboard from "@/components/modules/moduleDasboard";
import { Box, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <Box h="100%">
        <Box h="30%" w="100%" p="15px" gap="5" bg={"AZUL.20"} display={"flex"}>
          <CardInformation />
          <CardInformation />
          <CardInformation />
        </Box>
        <Box
          h="70%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            h="100%"
            w="97%"
            p="10px"
            mt="-8%"
            gap="8px"
            bg={"BRPR.10"}
            borderRadius={"8px"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box h="100%" w="25%">
              {/* Lista pra compra */}
              <TableProducts />
            </Box>
            <Box h="100%" w="25%" display={"block"}>
              <Box h="38%" w="100%">
                {/* Grafico */}
                <Graphics />
              </Box>
              <Box h="2%" />
              <Box h="60%" w="100%">
                {/* Calendario */}
                <Calendario />
              </Box>
            </Box>
            <Box h="100%" w="25%" bg="yellow">
              {/* Cardápio */}
              <Cardapio />
            </Box>
            <Box h="100%" w="25%" display={"block"}>
              <Box
                h="10%"
                w="100%"
                // bg="pink"
                alignItems={"center"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Text>Cardápio do dia</Text>
              </Box>
              <Box h="30%" w="100%">
                {/* Manhã */}
                <Manha />
              </Box>
              <Box h="30%" w="100%">
                {/* Almoço */}
                <Almoco />
              </Box>
              <Box h="30%" w="100%">
                {/* Janta */}
                <Janta />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
