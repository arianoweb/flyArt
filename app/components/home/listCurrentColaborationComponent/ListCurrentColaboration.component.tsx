import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  styleText,
} from "../../../assets/styles/variables";
import PostCardInfo from "../../publicationsComponents/PostCardInfoComponent/PostCardInfo.component";

const CARD_DEFAULT_1 = {
  status: 50,
  price: 5,
  project: "Regalo de Cumpleaños",
  client: "Samantha Newman",
  rank: 1.9,
  avatar:require("../../../assets/avatar.jpeg"),
  timeline: "02 Abr 2021",
  type:"manualidad",
  delivery:true
};
const CARD_DEFAULT_2 = {
  status: 50,
  price: 5,
  project: "Dibujo para Disco",
  client: "Justin Bieber",
  avatar:require("../../../assets/avatar2.jpeg"),
  rank: 3.4,
  timeline: "02 Abr 2021",
  type:"arte",
  delivery:false
};

const data = new Array(
  CARD_DEFAULT_1,
  CARD_DEFAULT_2,
  CARD_DEFAULT_1,
  CARD_DEFAULT_2,
  CARD_DEFAULT_1
);

export default function ListCurrentColaboration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pendientes por entregar:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={170}
        decelerationRate="fast"
        //snapToAlignment="start"
        bounces={true}
      >
        {data.map((project, index) => (
          <PostCardInfo key={index} data={project}></PostCardInfo>
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
    maxHeight: 280,
    marginTop:10
  },
  title: { ...styleText.textTitle, fontSize: 18, paddingHorizontal: 16 },
});
