import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";

export default function OptionsSearch() {
  return (
    <View style={styles.container}>
      <Avatar
        size="large"
        rounded
        source={require("../../../assets/arte.png")}
        overlayContainerStyle={styles.overlayAvatar}
        containerStyle={styles.avatar}
      />
            <Avatar
        size="large"
        rounded
        source={require("../../../assets/manualidad.png")}
        overlayContainerStyle={styles.overlayAvatar}
        containerStyle={styles.avatar}
      />
            <Avatar
        size="large"
        rounded
        source={require("../../../assets/decoracion.png")}
        overlayContainerStyle={styles.overlayAvatar}
        containerStyle={styles.avatar}
      />
            <Avatar
        size="large"
        rounded
        source={require("../../../assets/escolares.png")}
        overlayContainerStyle={styles.overlayAvatar}
        containerStyle={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"row",
      alignItems: "flex-start",
      //backgroundColor:"green",
      justifyContent: "center",
      width: Dimensions.get("window").width,
      paddingTop:10,

    },
    overlayAvatar: {
      borderColor: "#FFFFFF",
      borderWidth:3,
    },
    avatar:{
        //marginHorizontal:5,
        shadowOffset: {
            width: 2,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8.00,
        
        elevation: 6,
    }
  });
  
