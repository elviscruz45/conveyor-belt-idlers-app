import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { styles } from "./SearchScreen.styles";
import { SearchBar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  query,
  startAt,
  endAt,
  limit,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { size, map } from "lodash";
import { db } from "../../utils";

const backgroundImage = require("../../../assets/aqp3.jpeg");

export function SearchScreen(props) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  // const navigation = useNavigation();
  console.log("props search");

  // console.log(navigation);
  console.log(props);

  useEffect(() => {
    (async () => {
      const q = query();
    })();
  }, [searchText]);

  useEffect(() => {
    (async () => {
      const q = query();
    })();
  }, [searchText]);

  return (
    <>
      <SearchBar
        placeholder="Busca tu restaurante"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <ScrollView>
          {size(searchResults) === 0 ? (
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Text>No se han encontrado resultados</Text>
            </View>
          ) : (
            <Text>HOla</Text>
          )}
        </ScrollView>
      </ImageBackground>
    </>
  );
}
