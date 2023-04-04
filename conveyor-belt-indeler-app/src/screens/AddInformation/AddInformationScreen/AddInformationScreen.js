import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "@rneui/base";
import { InfoForm } from "../../../components/AddInformation/AddInformation/InforForm/InfoForm";
import { styles } from "./AddInformationScreen.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddInformationScreen.data";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function AddInformationScreen(props) {
  const { route } = props;
  const [formData, setFormData] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {}, [formData]);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      try {
        const newData = formValue;
        newData.createdAt = new Date().toISOString();
        setFormData(newData);
        navigation.navigate(screen.addinformation.Information, {
          formData: newData,
        });
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <View>
      <InfoForm
        formik={formik}
        CopyBeltNumber={route.params.CopyBeltNumber}
        EditData={route.params.EditData}
      />
      <Button
        title="Agregar Dato"
        buttonStyle={styles.addInformation}
        onPress={formik.handleSubmit}
        // loading={formik.isSubmitting}
      />
    </View>
  );
}
