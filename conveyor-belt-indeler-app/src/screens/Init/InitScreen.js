import React, { Component } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
// import { updateEmail, updatePassword, login } from "../actions/user";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LoginForm } from "../../components/Auth";
import { styles } from "./InitScreen.styles";
import { useNavigation } from "@react-navigation/native";

export function InitScreen(props) {
  const navigation = useNavigation();
  const { login } = props;

  const goToRegister = () => {
    navigation.navigate();
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.image}>
        <Image
          source={require("../../../assets/smcv2.png")}
          style={{ width: 60, height: 60 }}
        />
        <Image
          source={require("../../../assets/teseo3.png")}
          style={{ width: 232, height: 73 }}
        />
      </View>
      <View>
        <LoginForm login={login} />

        <Text style={styles.textRegister}>
          ¿Aún no tienes cuenta{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Regístrarse
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}
