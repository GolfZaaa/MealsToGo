import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { StyleSheet, View, SafeAreaView, StatusBar, Text } from "react-native";

import {
  useFonts as useOswald,
  Oswald_500Medium,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_300Light } from "@expo-google-fonts/lato";

export default function App() {
  let [OswaldfontsLoaded] = useOswald({
    Oswald_500Medium,
  });

  let [LatofontsLoaded] = useLato({
    Lato_300Light,
  });

  if (!OswaldfontsLoaded || !LatofontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
