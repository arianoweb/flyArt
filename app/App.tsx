
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from './components/mainTabsComponent/MainTabs.component';
import { useFonts } from 'expo-font';
import AppLoading  from 'expo-app-loading';


export default function App() {
  
  let [loaded] =  useFonts({
    //Pangolin: require('./assets/fonts/Pangolin-Regular.ttf'),
    "Quicksand-Light": require('./assets/fonts/Quicksand-Light.ttf'),
    "Quicksand-SemiBold": require('./assets/fonts/Quicksand-SemiBold.ttf'),
  });
  if (!loaded) {
    return <AppLoading/>;
  }else{
      return (
    <NavigationContainer>
    <MainTabs/>
  </NavigationContainer>
    );
  }

}

