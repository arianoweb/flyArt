import React, { FunctionComponent } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

interface OptionBottom {
  name: string;
  component: React.FunctionComponent<any>;
  options: any;
  screen: string;
}

interface CustomTabsOptions {
  options: OptionBottom[];
  configTabs:any
}

const CustomTabs = ({ options,configTabs }: CustomTabsOptions) => {
  return (
    <Tab.Navigator
      tabBarOptions={configTabs}
    >
      {options &&
        options.map((option: OptionBottom, index: number) => (
          <Tab.Screen key={index} name={option.name} options={option.options}>
            {(props) => (
              <option.component {...props} currentScreen={option.screen} />
            )}
          </Tab.Screen>
        ))}
    </Tab.Navigator>
  );
};
export default CustomTabs;
