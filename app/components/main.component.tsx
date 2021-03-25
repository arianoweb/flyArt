import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./mainTabsComponent/MainTabs.component";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";

export default function Main({ screen }: { screen: () => JSX.Element }) {
  const Screen = screen;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require("../assets/background.png")}
      >
        <Screen></Screen>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'flex-start',
    //justifyContent: 'center',
  },
  bg: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});
