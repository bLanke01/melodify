import React from "react";
import { Stack } from "expo-router";
import { SongProvider } from "../components/SongContext";

export default function Layout() {
  return (
    <SongProvider>
      <Stack />
    </SongProvider>
  );
}
