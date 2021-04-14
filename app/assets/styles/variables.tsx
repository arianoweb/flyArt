import { StyleSheet } from "react-native"

export const styleDefault={
    color:{
        primary:"#557aae",
        secondary:"#444444",

    },
    fonts:{
        normal:"Quicksand-Light",
        semiBold:"Quicksand-SemiBold"
    },
    fontSize:{
        normal:12,
        medium:14,
        large:16,
        xlarge:18,
        title:20
    },
}
export const styleText={
    textDefault:{
        color: styleDefault.color.secondary,
        fontFamily:styleDefault.fonts.semiBold,
        fontSize:styleDefault.fontSize.medium,
    },
    textTitle:{
        color: styleDefault.color.primary,
        fontFamily:styleDefault.fonts.semiBold,
        fontSize:styleDefault.fontSize.large,        
    },   
}

export const container={
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
}  
export const viewChip = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:40,
    paddingHorizontal:4,
    marginVertical:4,
    borderRadius: 10,
    backgroundColor:styleDefault.color.primary,
    opacity:0.8
}
export const icono:{[key:string]:any} = {
    manualidad:require("../manualidad.png"),
    decoracion:require("../decoracion.png"),
    arte:require("../arte.png"),
    tarea:require("../escolares.png")
}

export const chip = StyleSheet.create({
    container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:70,
    flexDirection: "row",
    //paddingVertical:2,
    paddingHorizontal:4,
    marginVertical:2,
    borderRadius: 10,
    backgroundColor:"#65d49d",
    opacity:0.6
    }})