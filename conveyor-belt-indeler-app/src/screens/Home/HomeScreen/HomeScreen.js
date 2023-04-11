import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./HomeScreen.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function HomeScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/StatisticsGraphic.png")}
        style={styles.image}
      />
      <View style={styles.radioCard}>
        <View>
          <Text>FAJA CV-012</Text>
        </View>
        <View>
          <Text>Total</Text>
        </View>
        <View>
          <Text>Retorno</Text>
        </View>
        <View>
          <Text>Impacto</Text>
        </View>
        <View>
          <Text>Carga</Text>
        </View>
        <View>
          <Text>Descarga</Text>
        </View>
        <View>
          <Text>125</Text>
        </View>
        <View>
          <Text>Polines de Retorno </Text>
        </View>
        <View>
          <Text>32.2%</Text>
        </View>
        <View>
          <Text>Detalles</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
