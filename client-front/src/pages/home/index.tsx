"use client";

import Dashboard from "@/components/layouts/dashboard100";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Menu from "@/components/layouts/menu";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      test
      {/* <Grid
        templateAreas={`"nav header""nav main""nav footer"`}
        gridTemplateRows={"10% 1fr 5%"}
        gridTemplateColumns={"16% 1fr"}
        h={"100vh"}
        w={"100vw"}
        bg={"CINZ.20"}
        fontWeight={"bold"}
      >
        <GridItem area={"header"} bg={"AZUL.20"} alignItems={"center"}>
          <Header />
        </GridItem>
        <GridItem area={"nav"} bg={"BRPR.10"} borderBottomRightRadius={"90"}>
          <Menu />
        </GridItem>
        <GridItem area={"main"} bg={"CINZ.20"}>
          <Dashboard />
        </GridItem>
        <GridItem area={"footer"} bg={"CINZ.20"}>
          <Footer />
        </GridItem>
      </Grid> */}
    </>
  );
}
