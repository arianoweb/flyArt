import React from "react";
import NavigatorComponent from "../../routers/Navigator.component";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import CustomTabs from "../functionalComponents/customTabsComponent/customTabs.component";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArchive, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function MainTabs() {
  const Options = [
    {
      name: "home",
      screen: "home",
      component: NavigatorComponent,
      options: {
        tabBarLabel: "Inicio",
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Entypo name="home" color={color} size={size} />
        ),
      },
    },
    {
      name: "myProyects",
      screen: "projects",
      component: NavigatorComponent,
      options: {
        tabBarLabel: "Inicio",
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <FontAwesomeIcon icon={faArchive} color={color} size={size} />
        ),
      },
    },
    {
      name: "search",
      component: NavigatorComponent,
      screen: "search",
      options: {
        tabBarLabel: "Buscar",
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <FontAwesome name="search" color={color} size={size} />
        ),
      },
    },
    {
      name: "Perfil",
      component: NavigatorComponent,
      screen: "account",
      options: {
        tabBarLabel: "Perfil",
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <FontAwesomeIcon icon={faUserCircle} color={color} size={size} />
        ),
      },
    },
  ];
  const style = StyleSheet.create({
    container: {
      backgroundColor: "#e0d9e4",
    },
  });

  const configTabs = {
    activeTintColor: "#4298b5",
    inactiveTintColor: "#354458",
    showLabel: false,
    style: style.container,
  };

  return <CustomTabs configTabs={configTabs} options={Options} />;
}
