import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./SearchScreen.styles";
import { SearchBar, Icon } from "@rneui/themed";
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
import { MyContext } from "../../../context/ThemeContext";
import { Loading } from "../../components/shared/Loading";

const backgroundImage = require("../../../assets/aqp3.jpeg");
const windowWidth = Dimensions.get("window").width;
export function SearchScreen(props) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const { getdataFirestore } = useContext(MyContext);

  const sortedFirestore = getdataFirestore.sort(
    (a, b) => new Date(b.createdData) - new Date(a.createdData)
  );
  useEffect(() => {
    const result = sortedFirestore.filter((item) => {
      const re = new RegExp(searchText, "ig");
      return re.test(item.ID);
    });
    setSearchResults(result);
  }, [searchText]);

  return (
    <>
      <SearchBar
        placeholder="Busca tu numero de polin o faja"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {!searchResults && <Loading show text="Cargando" />}

        {size(searchText) === 0 || size(searchResults) === 0 ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>No se han encontrado resultados</Text>
          </View>
        ) : (
          <FlatList
            data={searchResults}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.radioCard}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        // fontFamily: "DM Sans",
                        fontSize: 12,
                        // color: "#384967",
                        alignItems: "center",
                        opacity: 0.5,
                      }}
                    >
                      Fecha:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        // fontFamily: "DM Sans",
                        fontSize: 12,
                        // color: "#384967",
                        opacity: 0.5,
                      }}
                    >
                      {item.createdAt}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>Polin ID: </Text>
                    <Text>{item.ID}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>Prioridad: </Text>
                    <Text>{item.prioridad}</Text>
                    <Icon
                      // reverse
                      type="material-community"
                      name="circle"
                      color={
                        item.prioridad === "1_Critico"
                          ? "red"
                          : item.prioridad === "3_Normal"
                          ? "green"
                          : "yellow"
                      }
                      size={18}
                      onPress={() => goToDelete(item)}
                    />

                    <View
                      style={{
                        flexDirection: "row",
                        marginHorizontal: windowWidth - 350,
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Zona: </Text>
                      <Text>{item.zona}</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>Observacion: </Text>
                    <Text>{item.observacion}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        // fontFamily: "DM Sans",
                        fontSize: 12,
                        fontStyle: "italic",
                        opacity: 0.5,
                      }}
                    >
                      Inspeccionado Por:
                    </Text>
                    <Text
                      style={{
                        // fontFamily: "DM Sans",
                        fontSize: 12,
                        fontStyle: "italic",
                        opacity: 0.5,
                      }}
                    >
                      {item.userEmail}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        )}
      </ImageBackground>
    </>
  );
}
