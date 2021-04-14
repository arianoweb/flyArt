import { Dimensions, StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import OptionsSearch from "./optionsSearchComponent/OptionsSearch.component";
import CardStatusProject from "../cardInfoStatusProjectComponent/CardStatusProject.component";
import ListCards from "./listCardsComponent/ListCards.component";
import ListCurrentColaboration from "./listCurrentColaborationComponent/ListCurrentColaboration.component";
import PostCardInfo from "../publicationsComponents/PostCardInfoComponent/PostCardInfo.component";


const CARD_DEFAULT = {
  status:50,
  price:5,
  project:"Regalo de Cumpleaños",
  vendor:"FlyArt",
  rank:4.9,
  timeline:"02 Abr 2021"
}

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
          fontSize: 12,
          color: "#7a7a7a",
          maxHeight:20,
        }}
        inputContainerStyle={{ backgroundColor: "#eceff1", borderRadius: 25, maxHeight:40 }}
      />
      <OptionsSearch></OptionsSearch>
      <ListCards></ListCards>
      <ListCurrentColaboration></ListCurrentColaboration>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    
    
  },
  search: {
    maxHeight:50,
    marginTop: 30,
    width: Dimensions.get("window").width,
    backgroundColor: "#FFFFFF00",
    borderColor: "#FFFFFF00",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
});
