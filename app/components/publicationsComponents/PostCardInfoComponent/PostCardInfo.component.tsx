import {
  faMoneyBillWave,
  faStar,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import {
  chip,
  icono,
  styleDefault,
  styleText,
} from "../../../assets/styles/variables";
export default function PostCardInfo({ data }: { data: any }) {
  const TYPE_BANNER: { [key: string]: string } = {
    decoracion: "#9b539c",
    arte: "#f05b47",
    tarea: "#fcec8f",
    manualidad: "#14b8b1",
  };
  let type = data.type;
  const ranking =
    data.rank <= 2
      ? { bg: "#e3c3ce", color: "#bc1b38" }
      : data.rank <= 3.5
      ? { bg: "#ebd0d1", color: "#c27d05" }
      : { bg: "#c9ddd2", color: "#177e2a" };
  return (
    <View style={styles.container}>
      <View style={{ ...styles.banner, backgroundColor: TYPE_BANNER[type] }}>
        <View style={{ ...styles.line, position: "absolute", left: 4, top: 3 }}>
          <Avatar
            size={34}
            rounded
            source={icono[type]}
            overlayContainerStyle={{ ...styles.overlayAvatar, borderWidth: 2 }}
          />
        </View>
        <Avatar
          size={58}
          rounded
          source={data.avatar}
          overlayContainerStyle={styles.overlayAvatar}
        />
        <View
          style={{ ...styles.line, position: "absolute", right: 6, top: 8 }}
        >
          <View
            style={{
              ...chip.container,
              backgroundColor: ranking.bg,
              width: 40,
              paddingVertical: 1,
              opacity: 1,
              borderWidth: 1,
              borderColor: "#ffffff",
            }}
          >
            <FontAwesomeIcon icon={faStar} color={ranking.color} size={14} />
            <Text
              style={{
                ...styleText.textDefault,
                fontSize: 11,
                color: ranking.color,
                paddingLeft: 2,
              }}
            >
              {data.rank}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <Text
          style={{
            ...styleText.textDefault,
            fontSize: 11,
            textAlign: "center",
          }}
        >
          {data.client}
        </Text>
        <Text
          style={{ ...styleText.textTitle, textAlign: "center", padding: 4 }}
        >
          Proyecto {data.project}
        </Text>
        <View style={{ ...chip.container, maxHeight: 20 }}>
          <Text
            style={{ ...styleText.textDefault, fontSize: 11, color: "#0f4c19" }}
          >
            ${data.price}{" "}
          </Text>
          <FontAwesomeIcon icon={faMoneyBillWave} color={"#0f4c19"} size={14} />
        </View>
        {data.delivery ? (
          <View
            style={{
              ...chip.container,
              maxHeight: 20,
              backgroundColor: "#20457c",
            }}
          >
            <Text
              style={{
                ...styleText.textDefault,
                fontSize: 11,
                color: "#ffffff",
                lineHeight: 13,
              }}
            >
              Delivery{" "}
            </Text>
            <FontAwesomeIcon icon={faTruckMoving} color={"#ffffff"} size={14} />
          </View>
        ) : null}
        <View
          style={{ ...styles.line, alignItems: "flex-end", paddingBottom: 10 }}
        >
          <Text style={{ ...styleText.textDefault, fontSize: 11 }}>
            {"Entrega: "}
          </Text>
          <Text
            style={{
              ...styleText.textDefault,
              fontSize: 11,
              color: styleDefault.color.primary,
            }}
          >
            {data.timeline}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 150,
    backgroundColor: "#f4f2f6",
    borderRadius: 10,
    maxHeight: 210,
    elevation: 2,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  banner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    minWidth: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    maxHeight: 40,
    //backgroundColor: TYPE_BANNER,
    //position:"relative",
    //top:20
    paddingTop: 10,
  },
  overlayAvatar: {
    borderColor: "#FFFFFF",
    borderWidth: 3,
  },
  info: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 24,
  },
  line: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
