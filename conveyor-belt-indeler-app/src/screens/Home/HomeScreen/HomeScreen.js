import { View, Text, Image, FlatList, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./HomeScreen.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../utils";
import { belts } from "./HomeScreen.data";

const backgroundImage = require("../../../../assets/aqp1.jpeg");

export function HomeScreen(props) {
  const navigation = useNavigation();
  const [FirestoreData, setFirestoreData] = useState();
  console.log("holaHome");
  const data = props.route.params?.data?.dataList || "";

  const handlePassParams = () => navigation.setParams("mmmmmmmm");

  useEffect(() => {
    console.log("eeeeeffect");
    const fetchDocs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Polines-Data"));
        const post_array = [];
        querySnapshot.forEach((doc) => {
          post_array.push(doc.data().dataList);
        });
        console.log(post_array.flat());
        // reestructuring my data
        const new_array = [];
        post_array.flat().forEach((item) => {
          new_array.push(item);
        });
        setFirestoreData(new_array.flat());
      } catch (error) {
        console.error("Error fetching docs from Firestore:", error);
      }
    };
    fetchDocs();
    handlePassParams();
  }, [data]);

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Image
          source={require("../../../../assets/StatisticsGraphic.png")}
          style={styles.image}
        />
        {/* <KeyboardAwareScrollView> */}
        <FlatList
          data={belts}
          renderItem={({ item, index }) => {
            const total = (item) => {
              if (FirestoreData) {
                const filteredArr = FirestoreData.filter(
                  (obj) => obj.posicion === "Derecho" && obj.numeroFaja === item
                );
                const count = filteredArr.length;
                return count;
              }
            };
            const percentage = (item) => {
              if (FirestoreData) {
                const filteredArr = FirestoreData.filter(
                  (obj) => obj.posicion === "Derecho" && obj.numeroFaja === item
                );
                const count = filteredArr.length;
                const percentaje = (count / FirestoreData.length) * 100;
                return percentaje.toFixed(1);
              }
            };

            const goToData = (item) => {
              if (FirestoreData) {
                const filteredArr = FirestoreData.filter(
                  (obj) => obj.numeroFaja === item
                );
                navigation.navigate(screen.homestack.data, {
                  dataReport: filteredArr,
                });
              }
            };
            return (
              <View style={styles.radioCard}>
                <View style={styles.containerTypes1}>
                  <View>
                    <View style={styles.containerTypes}>
                      <Text style={styles.titleText}>{item}</Text>
                    </View>
                    <View style={styles.containerTypes}>
                      <View style={styles.containerText}>
                        <Text style={styles.tagText}>Total</Text>
                      </View>
                      <View style={styles.containerText}>
                        <Text style={styles.tagText}>Retorno</Text>
                      </View>
                      <View style={styles.containerText}>
                        <Text style={styles.tagText}>Impacto</Text>
                      </View>
                      <View style={styles.containerText}>
                        <Text style={styles.tagText}>Carga</Text>
                      </View>
                      <View style={styles.containerText}>
                        <Text style={styles.tagText}>Descarga</Text>
                      </View>
                    </View>
                    <View style={styles.containerTypes}>
                      <View>
                        <Text style={styles.dataText}>{total(item)}</Text>
                      </View>
                      <View>
                        <Text style={styles.dataText}>Polines de Retorno </Text>
                      </View>
                      <View>
                        <Text style={styles.dataText}>{percentage(item)}%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.detalles}>
                    {/* <Text>Detalles</Text> */}
                    <Icon
                      reverse
                      type="material-community"
                      name="page-next"
                      color="#FA4A0C"
                      containerStyle={styles.btnContainer2}
                      onPress={() => goToData(item)}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </ImageBackground>
    </>
  );
}
