import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routers from "./router"


const Stack = createStackNavigator();
interface Props {
  currentScreen: string;
}

export default function NavigatorComponent({ currentScreen }: Props) {
  return (
    <Stack.Navigator headerMode="float" initialRouteName={currentScreen}>
      {routers.map((router,index)=>(
        <Stack.Screen
        key={index}
        name={router.name}
        component={router.component}
        options={router.options

        }/>
      ))}


    </Stack.Navigator>
  );
}
