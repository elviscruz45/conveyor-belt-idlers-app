import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from "@rneui/themed";
import { styles } from "./InformationScreen.styles";
import { screen } from "../../../utils";
import { ListData } from "../../../components/AddInformation/ListInformation";
import { map, filter } from "lodash";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../../../utils";

export function InformationScreen(props) {
  const [dataList, setDataList] = useState([]);
  const { navigation, route } = props;
  const [data, setData] = useState();
  const dataID = data?.numeroFaja + data?.numeroPolin + data?.posicion || "";
  const lastListData = dataList.slice(-1)[0];
  const lastListDataID =
    lastListData?.numeroFaja +
      lastListData?.numeroPolin +
      lastListData?.posicion || "";
  console.log("last Item", data);
  console.log("dataList", dataList);

  useEffect(() => {
    if (route.params) {
      setData(route.params.formData);
    }
  }, [route.params]);

  useEffect(() => {
    if (data) {
      if (dataID === lastListDataID) {
        alert("No se guardo, el polin ya esta registrado anteriormente");
        return;
      } else if (route.params.Index || route.params.Index === 0) {
        const newDataList = [...dataList];
        newDataList.splice(route.params.Index, 0, data);
        setDataList(newDataList);
      } else {
        setDataList((prevDataList) => [...prevDataList, data]);
      }
    }
  }, [data]);

  const goToInformation = () => {
    navigation.navigate(screen.addinformation.addInformation, {
      CopyBeltNumber: data || "",
    });
  };

  const goToEdit = (item, index) => {
    console.log("Edit");
    navigation.navigate(screen.addinformation.addInformation, {
      EditData: { ...item, Index: index },
    });
    const result = filter(dataList, (data, index) => data !== item);
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

  const sendToFirebase = async (dataList) => {
    try {
      const newData = { dataList: dataList };
      newData.id = uuid();
      newData.createdAt = new Date();
      await setDoc(doc(db, "Polines-Data", newData.id), newData);
      alert("Se han enviado los datos correctamente a la nube");
      // navigation.goBack();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {dataList && (
        <FlatList
          data={dataList}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Text>{index + 1}</Text>
                <View style={styles.btnEditDelete}>
                  <Text>Fecha: {item.createdAt}</Text>
                  <Icon
                    // reverse
                    type="material-community"
                    name="pencil-outline"
                    // color="#FA4A0C"
                    // containerStyle={styles.btnContainer1}
                    onPress={() => goToEdit(item, index)}
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
          onPress={() => sendToFirebase(dataList)}
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
