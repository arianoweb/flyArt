import React from "react";
import Home from "../components/home/Home.component";
import Main from "../components/main.component";
const setComponent = (component: () => JSX.Element) => {
  return () => <Main screen={component} />;
};
const routers = [
  {
    name: "home",
    component: setComponent(Home),
    options: {
      headerShown: false,
      headerTransparent: true,
      headerTintColor: "#fff",
    },
  },
  {
    name: "projects",
    component: setComponent(Home),
    options: {
      headerTitleAlign: "center",
      headerTransparent: true,
      headerTintColor: "#fff",
    },
  },
  {
    name: "search",
    component: setComponent(Home),
    options: {
      title: "busqueda",
      headerTitleAlign: "center",
      headerTransparent: true,
      headerTintColor: "#fff",
    },
  },
  {
    name: "account",
    component: setComponent(Home),
    options: {
      headerTitleAlign: "center",
      headerTransparent: true,
      headerTintColor: "#fff",
    },
  },
];

export default routers;
