import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

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
    <View style={styles.container}>
      <Text style={styles.txt}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontFamily: "oswald",
  },
});
