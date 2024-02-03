"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  /* colors: {
    teal: "#688d95",
    white: "#fefefe",
    blue: "#7fbae6",
    yellow: "#f2b705",
    orange: "#f28705",
    red: "#8c271e",
  },*/
  styles: {
    global: {},
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
