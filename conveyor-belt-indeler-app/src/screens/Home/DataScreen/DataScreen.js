import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "./DataScreen.styles";
import { Icon } from "@rneui/themed";

export function DataScreen(props) {
  const { route, navigation } = props;
  const Data = route.params.dataReport;
  Data.sort((a, b) => new Date(b.createdData) - new Date(a.createdData));
  const uniqueObjects = {};
  for (const obj of Data) {
    if (
      !uniqueObjects[obj.ID] ||
      new Date(obj.createdData) > new Date(uniqueObjects[obj.ID].createdData)
    ) {
      uniqueObjects[obj.ID] = obj;
    }
  }

  const uniqueList = Object.values(uniqueObjects);
  uniqueList.sort((a, b) => a.numeroPolin - b.numeroPolin);

  return (
    <View>
      <View style={styles.radioCard}>
        <View style={styles.containerTypes1}>
          <Text>Numero Polin</Text>
          <Text>Fecha Insp</Text>

          <Text>Prioridad</Text>
          <Text>Cambios</Text>
        </View>
      </View>
      <FlatList
        data={uniqueList}
        renderItem={({ item, index }) => {
          const fecha = (item) => {
            const date = new Date(item.createdData);
            const monthNamesEn = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            const monthNamesEs = [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre",
            ];
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear().toString().slice(-2);
            const formattedDate = `${day}${monthNamesEs[month]}${year}`;
            return formattedDate;
          };

          return (
            <View style={styles.radioCard}>
              <View style={styles.containerTypes1}>
                <Text>
                  .{item.numeroPolin}-{item.posicion}
                </Text>

                <Text>{fecha(item)}</Text>
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
                <Text>3</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
