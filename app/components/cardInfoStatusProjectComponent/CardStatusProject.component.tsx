import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";
import {styleDefault, styleText} from "../../assets/styles/variables"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMoneyBillWave, faStar, faTruckMoving } from "@fortawesome/free-solid-svg-icons";

interface Prop{
    project:{
     status:number,
     price:number,
     project:string,
     vendor:string,
     rank:number,
     timeline:string
    }

}

export default function CardStatusProject({project}:Prop) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require("../../assets/logo4.png")} style={styles.img} />
      </View>
      <View style={styles.containerInfo}>

        <View style={styles.line}>
          <Text ellipsizeMode='tail' numberOfLines={1} style={styles.project}>{project.project}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styleText.textDefault}>{project.vendor}  </Text>
          <FontAwesomeIcon icon={faStar} color={"#fa8b03"} size={14} />
          <Text style={{...styleText.textDefault,fontSize:11,color:"#fa8b03"}}> {`${project.rank}`}</Text>
        </View>
        <View style={styles.line}>
          <Text style={{...styleText.textDefault,fontSize:11}}>{"Entrega: "}</Text>
          <Text style={{...styleText.textDefault,fontSize:11,color:styleDefault.color.primary}}>{project.timeline}</Text>
        </View>
        <View style={styles.line}>
        <View style={styles.chip}>
        <Text style={{...styleText.textDefault,fontSize:11,color:"#0f4c19"}}>${project.price} </Text>
        <FontAwesomeIcon icon={faMoneyBillWave} color={"#0f4c19"} size={14} />
        </View>
        <View style={{...styles.chip,backgroundColor:"#20457c"}}>
        <Text style={{...styleText.textDefault,fontSize:11,color:"#ffffff",lineHeight:12}}>Delivery </Text>
        <FontAwesomeIcon icon={faTruckMoving} color={"#ffffff"} size={14} />
        </View>
        </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      width: Dimensions.get("window").width - 60,
      backgroundColor: "#ffffff",
      borderRadius: 6,
      maxHeight: 106,
      /*shadowOffset: {
          width: 2,
          height: 2,
        },*/
        elevation: 2,
        marginHorizontal:10,
        marginVertical:6
    },
    line: {
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    containerInfo: {
      margin: 4,
      maxHeight:90
    },
    project: {
      ...styleText.textTitle,
      marginBottom:4,
      maxWidth:Dimensions.get("window").width - 180,
    },
    img: {
      borderRadius: 6,
      width: 98,
      height: 98,
    },
    containerLogo: {
      borderRadius: 4,
      backgroundColor: "white",
      marginHorizontal:4
    },
    chip:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        maxWidth:80,
        flexDirection: "row",
        //paddingVertical:2,
        paddingHorizontal:6,
        marginVertical:2,
        borderRadius: 10,
        backgroundColor:"#65d49d",
        opacity:0.6,
        marginHorizontal:4,
        paddingVertical:2
        
    }
  });
