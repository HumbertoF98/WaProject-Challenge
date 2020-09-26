import React from "react";
import Routes from "./src/Routes/routes";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  // await load font
  let [loaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (!loaded) {
    return null;
  }
  return <Routes></Routes>;
}
