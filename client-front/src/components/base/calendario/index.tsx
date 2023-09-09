"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import S from "./Calendario.module.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendario() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      {/* <Box
        h="100%"
        w="100%"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        border="2px solid #B3B3B375"
      > */}
      <Calendar
        onChange={onChange}
        value={value}
        className={S.responsivel}
        // tileContent="#00FF00"
      />
      {/* </Box> */}
    </>
  );
}
