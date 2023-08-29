"use client";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
