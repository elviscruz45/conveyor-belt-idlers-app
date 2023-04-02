import React from "react";
import { View } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useFormik } from "formik";
// import { getAuth, updateProfile } from "firebase/auth";
// import Toast from "react-native-toast-message";
import { initialValues, validationSchema } from "./ChangeDisplayZone.data";
import { styles } from "./ChangeDisplayZone.styles";
import { Pickermode } from "./Pickermode";

export function ChangeDisplayZone(props) {
  const { onClose, handlerenderComponentZone } = props;
  const formik = useFormik({
    initialValues: initialValues(),
    // validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log(formValue);
      onClose();
      handlerenderComponentZone(`${formValue.Zone}`);
      // try {
      //   const { displayName } = formValue;
      //   const currentUser = getAuth().currentUser;
      //   await updateProfile(currentUser, { displayName });
      //   onReload();
      //   onClose();
      // } catch (error) {
      //   Toast.show({
      //     type: "error",
      //     position: "bottom",
      //     text1: "Error al cambiar el nombre y apellidos",
      //   });
      // }
    },
  });

  return (
    <View>
      <View style={styles.content}>
        <Pickermode formik={formik} />
        {/* <Input
          placeholder="Faja"
          rightIcon={{
            type: "material-community",
            name: "chevron-right",
            color: "#c2c2c2",
          }}
          onChangeText={(text) => formik.setFieldValue("Belt", text)}
          errorMessage={formik.errors.Belt}
        /> */}
        <Button
          title="Aceptar"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          onPress={formik.handleSubmit}
          // loading={formik.isSubmitting}
        />
      </View>
    </View>
  );
}
