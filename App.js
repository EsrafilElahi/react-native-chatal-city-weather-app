import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Header from "./components/Header";
import GlobalStyles from "./styles/AppStyles";
import Colors from "./styles/Colors";
import Body from './components/Body'

const customFonts = {
  yekan: require("./assets/fonts/yekan.ttf"),
  oswald: require("./assets/fonts/Oswald-Light.ttf"),
  oswald_regular: require("./assets/fonts/Oswald-Regular.ttf"),
};

export default function App() {
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar backgroundColor={Colors.statusBg} />
      <Body />
    </SafeAreaView>
  );
}
