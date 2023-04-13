import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "./DataScreen.styles";

export function DataScreen(props) {
  const { route, navigation } = props;
  const Data = route.params.dataReport;
  console.log(Data);

  return (
    <View>
      <View style={styles.radioCard}>
        <View style={styles.containerTypes1}>
          <Text>Nro Polin</Text>
          <Text>Posicion</Text>

          <Text>Prioridad</Text>
          <Text>Cambios</Text>
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.radioCard}>
              <View style={styles.containerTypes1}>
                <Text>{item.numeroFaja}</Text>
                <Text>{item.posicion}</Text>
                <Text>{item.prioridad}</Text>
                <Text>3</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
