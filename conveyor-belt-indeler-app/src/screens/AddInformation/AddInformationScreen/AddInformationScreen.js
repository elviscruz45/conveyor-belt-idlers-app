import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "@rneui/base";
import { InfoForm } from "../../../components/AddInformation/AddInformation/InforForm/InfoForm";
import { styles } from "./AddInformationScreen.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddInformationScreen.data";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
        const date = new Date();
        const monthNames = [
          "ene.",
          "feb.",
          "mar.",
          "abr.",
          "may.",
          "jun.",
          "jul.",
          "ago.",
          "sep.",
          "oct.",
          "nov.",
          "dic.",
        ];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const formattedDate = `${day} ${month} ${year}  ${hour}:${minute} Hrs`;

        newData.createdAt = formattedDate;
        setFormData(newData);
        navigation.navigate(screen.addinformation.Information, {
          formData: newData,
          Index: route.params.EditData?.Index,
        });
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <KeyboardAwareScrollView>
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
    </KeyboardAwareScrollView>
  );
}
