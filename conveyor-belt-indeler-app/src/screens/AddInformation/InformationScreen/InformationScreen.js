import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from "@rneui/themed";
import { styles } from "./InformationScreen.styles";
import { screen } from "../../../utils";
import { ListData } from "../../../components/AddInformation/ListInformation";
import { map, filter } from "lodash";

export function InformationScreen(props) {
  const [dataList, setDataList] = useState([]);
  const { navigation, route } = props;
  const [data, setData] = useState();
  useEffect(() => {
    if (route.params) {
      setData(route.params.formData);
    }
  }, [route.params]);

  useEffect(() => {
    if (data) {
      setDataList((prevDataList) => [...prevDataList, data]);
    }
  }, [data]);

  const goToInformation = () => {
    navigation.navigate(screen.addinformation.addInformation, {
      CopyBeltNumber: data || "",
    });
  };

  const goToEdit = (item) => {
    console.log("Edit");
    navigation.navigate(screen.addinformation.addInformation, {
      EditData: item,
    });
    const result = filter(dataList, (data) => data !== item);
    setDataList(result);
  };
  const goToDelete = (item) => {
    Alert.alert(
      "Eliminar Dato",
      "Estas Seguro de eliminar este dato?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            const result = filter(dataList, (data) => data !== item);
            setDataList(result);
          },
        },
      ],
      { cancelable: false }
    );

    console.log("Delete");
  };
  return (
    <>
      {dataList && (
        <FlatList
          data={dataList}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.btnEditDelete}>
                  <Text>Fecha: {item.createdAt}</Text>
                  <Icon
                    // reverse
                    type="material-community"
                    name="pencil-outline"
                    // color="#FA4A0C"
                    // containerStyle={styles.btnContainer1}
                    onPress={() => goToEdit(item)}
                  />
                  <Icon
                    // reverse
                    type="material-community"
                    name="trash-can-outline"
                    // color="#FA4A0C"
                    // containerStyle={styles.btnContainer1}
                    onPress={() => goToDelete(item)}
                  />
                </View>
                <Text>Inspeccionado Por: Robert Velarde Tejada</Text>
                <Text>NumeroFaja: {item.numeroFaja}</Text>
                <Text>NumeroPolin: {item.numeroPolin}</Text>
                <Text>Posicion: {item.posicion}</Text>
                <Text>Zona: {item.zona}</Text>
                <Text>Condicion: {item.condicion}</Text>
                <Text>Prioridad: {item.prioridad}</Text>
                <Text>Observacion: {item.observacion}</Text>

                <Text>
                  ----------------------------------------------------
                </Text>
                <Text> </Text>
              </View>
            );
          }}
        />
      )}
      <View>
        <Icon
          reverse
          type="material-community"
          name="send-circle-outline"
          color="#FA4A0C"
          containerStyle={styles.btnContainer1}
          onPress={goToInformation}
        />
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="#FA4A0C"
          containerStyle={styles.btnContainer2}
          onPress={goToInformation}
        />
      </View>
    </>
  );
}
