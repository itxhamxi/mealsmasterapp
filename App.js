import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { ResturantScreen } from "./screens/ResturantScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
