import React from "react";
import { Dimensions, StyleSheet, Text, View, Vibration, Alert } from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styleDefault } from "../../../assets/styles/variables";
const fontFamily = "Quicksand-SemiBold"
export default function OptionsSearch() {

  const onPressOption = ()=>{
    Vibration.vibrate(20)
    Alert.alert(
      "Accion",
      "En desarrollo",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
 
  }
  return (
    <View style={styles.container}>
      <View style={styles.options}>
      <TouchableOpacity
      style={styles.options}
        onPress={onPressOption}>
        <Avatar
          size={56}
          rounded
          source={require("../../../assets/arte.png")}
          overlayContainerStyle={styles.overlayAvatar}
          containerStyle={styles.avatar}
        />
        <Text style={styles.text}>Artes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.options} >
      <TouchableOpacity
      style={styles.options}
        onPress={onPressOption}>
        <Avatar
          size={56}
          rounded
          source={require("../../../assets/manualidad.png")}
          overlayContainerStyle={styles.overlayAvatar}
          containerStyle={styles.avatar}
        />
        <Text style={styles.text}>Manualidades</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
      <TouchableOpacity
      style={styles.options}
        onPress={onPressOption}>
        <Avatar
          size={56}
          rounded
          source={require("../../../assets/decoracion.png")}
          overlayContainerStyle={styles.overlayAvatar}
          containerStyle={styles.avatar}
        />
        <Text style={styles.text}>Decoracion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
      <TouchableOpacity
      style={styles.options}
        onPress={onPressOption}>
        <Avatar
          size={56}
          rounded
          source={require("../../../assets/escolares.png")}
          overlayContainerStyle={styles.overlayAvatar}
          containerStyle={styles.avatar}
        />
        <Text style={styles.text}>Tareas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    paddingTop: 10,
    maxHeight:96
  },
  options:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize:11,
    marginVertical:6,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily,
    color:styleDefault.color.secondary
  },
  overlayAvatar: {
    borderColor: "#FFFFFF",
    borderWidth: 3,
  },
  avatar: {
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.0,
    elevation: 6,
  },
});
