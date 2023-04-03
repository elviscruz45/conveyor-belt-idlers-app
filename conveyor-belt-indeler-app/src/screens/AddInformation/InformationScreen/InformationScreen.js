import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from "@rneui/themed";
import { styles } from "./InformationScreen.styles";
import { screen } from "../../../utils";
import { ListData } from "../../../components/AddInformation/ListInformation";

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
  return (
    <>
      {dataList && (
        <FlatList
          data={dataList}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>Fecha: {item.createdAt}</Text>
                <Text>Inspeccionado Por: Robert Velarde Tejada</Text>
                <Text>NumeroFaja: {item.numeroFaja}</Text>
                <Text>NumeroPolin: {item.numeroPolin}</Text>
                <Text>Posicion: {item.posicion}</Text>
                <Text>Zona: {item.zona}</Text>
                <Text>Condicion: {item.condicion}</Text>
                <Text>Prioridad: {item.prioridad}</Text>
                <Text>Observacion: {item.observacion}</Text>
              </View>
            );
          }}
        />
      )}

      <Icon
        reverse
        type="material-community"
        name="plus"
        color="#FA4A0C"
        containerStyle={styles.btnContainer}
        onPress={goToInformation}
      />
    </>
  );
}
