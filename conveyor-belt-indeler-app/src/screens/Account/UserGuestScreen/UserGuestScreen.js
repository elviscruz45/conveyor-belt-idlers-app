import React from "react";
import { ScrollView, View, ImageBackground } from "react-native";
import { Text, Button, Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./UserGuestScreen.styles";
const backgroundImage = require("../../../../assets/aqp1.jpeg");

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <ScrollView centerContent={true} style={styles.content}>
          <Image
            source={require("../../../../assets/cerro1.jpeg")}
            style={styles.image}
          />
          <View style={styles.radioCard}>
            <Text style={styles.title}>Gestion del Mantenimiento de Fajas</Text>
            <Text style={styles.description}>
              Registrar y gestiona información de manera eficiente y accesible,
              lo que mejora significativamente la experiencia del usuario.
              Además,gestiona los datos de manera inteligente, facilitando la
              toma de decisiones basadas en información precisa y actualizada.
            </Text>
          </View>
          <Button
            title="Ver tu perfil"
            onPress={goToLogin}
            buttonStyle={styles.btnStyle}
          />
        </ScrollView>
      </ImageBackground>
    </>
  );
}
