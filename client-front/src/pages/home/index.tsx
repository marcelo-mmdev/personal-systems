"use client";

import Dashboard from "@/components/layouts/dashboard";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Menu from "@/components/layouts/menu";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Grid
        templateAreas={`"nav header""nav main""nav footer"`}
        gridTemplateRows={"10% 1fr 5%"}
        gridTemplateColumns={"16% 1fr"}
        h={"100vh"}
        w={"100vw"}
        bg={"CINZ.20"}
        fontWeight={"bold"}
      >
        <GridItem area={"header"} bg={"AZUL.20"} alignItems={"center"}>
          {/* Header */}
          <Header />
        </GridItem>
        <GridItem area={"nav"} bg={"BRPR.10"} borderBottomRightRadius={"90"}>
          {/* Menu */}
          <Menu />
        </GridItem>
        <GridItem area={"main"} bg={"CINZ.20"}>
          {/* Main */}
          <Dashboard />
        </GridItem>
        <GridItem area={"footer"} bg={"CINZ.20"}>
          {/* Footer */}
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}
