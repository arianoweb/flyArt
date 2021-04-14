import React from "react";
import { Dimensions, StyleSheet, Text, Vibration, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  styleText,
} from "../../../assets/styles/variables";
import CardStatusProject from "../../cardInfoStatusProjectComponent/CardStatusProject.component";

const CARD_DEFAULT = {
  status: 50,
  price: 5,
  project: "Regalo de Cumpleaños",
  vendor: "FlyArt",
  rank: 4.9,
  timeline: "02 Abr 2021",
};

const data = new Array(
  CARD_DEFAULT,
  CARD_DEFAULT,
  CARD_DEFAULT,
  CARD_DEFAULT,
  CARD_DEFAULT
);

export default function ListCards() {
  const onPress = ()=>{
    Vibration.vibrate(20)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pendiente por recibir:</Text>
      <ScrollView
        onScrollEndDrag={onPress}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").width - 40}
        decelerationRate="fast"
        snapToAlignment="end"
        bounces={true}
      >
        {data.map((project, index) => (
          <CardStatusProject key={index} project={project}></CardStatusProject>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    maxHeight: 140,
  },
  title: { ...styleText.textTitle, fontSize: 18, paddingHorizontal: 16 },
});
