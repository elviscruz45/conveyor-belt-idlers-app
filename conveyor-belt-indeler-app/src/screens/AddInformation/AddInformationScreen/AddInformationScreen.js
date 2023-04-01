import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { InfoForm } from "../../../components/AddInformation/AddInformation/InforForm/InfoForm";
import { styles } from "./AddInformationScreen.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddInformationScreen.data";

export function AddInformationScreen() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    // onSubmit: async (formValue) => {
    //   try {
    //     const newData = formValue;
    //     newData.createdAt = new Date();
    //   } catch (error) {
    //     alert(error);
    //   }
    // },
    onSubmit: (formValue) => {
      console.log(formValue);
    },
  });
  return (
    <View>
      <InfoForm formik={formik} />

      <Button
        title="Agregar Dato"
        buttonStyle={styles.addInformation}
        onPress={formik.handleSubmit}
        // loading={formik.isSubmitting}
      />
    </View>
  );
}
