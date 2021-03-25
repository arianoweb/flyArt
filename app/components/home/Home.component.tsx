import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import React, { useState, useEffect } from "react";
import OptionsSearch from "./optionsSearchComponent/OptionsSearch.component";

export default function Home() {
  const [search, setSearch] = useState("");
  const searchFilterFunction = (text: string) => {
    setSearch(text);
  };

  /**  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); */

  return (
    <View style={styles.container}>
      <SearchBar
        searchIcon={{ size: 24, color: "#7a7a7a" }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={() => searchFilterFunction("")}
        //@ts-ignore
        placeholder="Type Here..."
        value={search}
        containerStyle={styles.search}
        inputStyle={{
          backgroundColor: "#eceff1",
          fontSize: 14,
          color: "#7a7a7a",
        }}
        inputContainerStyle={{ backgroundColor: "#eceff1", borderRadius: 25 }}
      />
      <OptionsSearch></OptionsSearch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    paddingTop: 25,
  },
  search: {
    width: Dimensions.get("window").width,
    backgroundColor: "#FFFFFF00",
    borderColor: "#FFFFFF00",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
});
