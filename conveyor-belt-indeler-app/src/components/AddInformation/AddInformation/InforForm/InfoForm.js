import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input } from "@rneui/themed";
import { styles } from "./InforForm.styles";
import React, { useState, useEffect } from "react";
import { Modal } from "../../../shared/Modal";
import { ChangeDisplayBelt } from "../ChangeDisplayBelt";
import { ChangeDisplayZone } from "../ChangeZoneType";
import { ChangeDisplayIdler } from "../ChangeIdlerNumber";
import { ChangeDisplayPosition } from "../ChangePosition";
import { ChangeDisplayCondition } from "../ChangeCondition";
import { ChangeDisplayPriority } from "../ChangePriority";

import { initialValues } from "../ChangeDisplayBelt/ChangeDisplayBelt.data";
export function InfoForm(props) {
  const { formik, CopyBeltNumber } = props;
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);
  const [defaultValueFaja, setDefaultValueFaja] = useState("");
  const [defaultValueZone, setDefaultValueZone] = useState("");
  const [defaultValueIdler, setDefaultValueIdler] = useState("");
  const [defaultValuePosition, setDefaultValuePosition] = useState("");
  const [defaultValueCondition, setDefaultValueCondition] = useState("");
  const [defaultValuePriority, setDefaultValuePriority] = useState("");

  useEffect(() => {
    formik.setFieldValue("numeroFaja", CopyBeltNumber.numeroFaja);
    formik.setFieldValue("zona", CopyBeltNumber.zona);
    formik.setFieldValue("numeroPolin", CopyBeltNumber.numeroPolin);
  }, []);

  function handlerenderComponent(value) {
    setDefaultValueFaja(value);
  }
  function handlerenderComponentZone(value) {
    setDefaultValueZone(value);
  }
  function handlerenderComponentIdler(value) {
    setDefaultValueIdler(value);
  }
  function handlerenderComponentPosition(value) {
    setDefaultValuePosition(value);
  }
  function handlerenderComponentCondition(value) {
    setDefaultValueCondition(value);
  }
  function handlerenderComponentPriority(value) {
    setDefaultValuePriority(value);
  }
  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);

  const selectComponent = (key) => {
    if (key === "numeroFaja") {
      setRenderComponent(
        <ChangeDisplayBelt
          onClose={onCloseOpenModal}
          handlerenderComponent={handlerenderComponent}
          formik={formik}
          CopyBeltNumber={CopyBeltNumber}
        />
      );
    }
    if (key === "zona") {
      setRenderComponent(
        <ChangeDisplayZone
          onClose={onCloseOpenModal}
          handlerenderComponentZone={handlerenderComponentZone}
          formik={formik}
          CopyBeltNumber={CopyBeltNumber}
        />
      );
    }
    if (key === "numeroPolin") {
      setRenderComponent(
        <ChangeDisplayIdler
          onClose={onCloseOpenModal}
          handlerenderComponentIdler={handlerenderComponentIdler}
          formik={formik}
          CopyBeltNumber={CopyBeltNumber}
        />
      );
    }
    if (key === "posicion") {
      setRenderComponent(
        <ChangeDisplayPosition
          onClose={onCloseOpenModal}
          handlerenderComponentPosition={handlerenderComponentPosition}
          formik={formik}
        />
      );
    }
    if (key === "condicion") {
      setRenderComponent(
        <ChangeDisplayCondition
          onClose={onCloseOpenModal}
          handlerenderComponentCondition={handlerenderComponentCondition}
          formik={formik}
        />
      );
    }
    if (key === "prioridad") {
      setRenderComponent(
        <ChangeDisplayPriority
          onClose={onCloseOpenModal}
          handlerenderComponentPriority={handlerenderComponentPriority}
          formik={formik}
        />
      );
    }
    onCloseOpenModal();
  };

  return (
    <KeyboardAwareScrollView>
      <Text></Text>
      <View style={styles.content}>
        <Input
          // value={defaultValueFaja || BeltTag}
          placeholder="Numero de Faja"
          defaultValue={defaultValueFaja || CopyBeltNumber.numeroFaja}
          editable={false}
          onChangeText={() =>
            formik.setFieldValue(
              "numeroFaja",
              defaultValueFaja || CopyBeltNumber.numeroFaja
            )
          }
          errorMessage={formik.errors.numeroFaja}
          rightIcon={{
            type: "material-community",
            name: "tag-multiple-outline",
            // color: getColorIconMap(formik),
            onPress: () => selectComponent("numeroFaja"),
          }}
        />
        <Input
          placeholder="Zona/Tipo"
          defaultValue={defaultValueZone || CopyBeltNumber.zona}
          editable={false}
          onChangeText={() =>
            formik.setFieldValue(
              "zona",
              defaultValueZone || CopyBeltNumber.zona
            )
          }
          errorMessage={formik.errors.zona}
          rightIcon={{
            type: "material-community",
            name: "multicast",
            // color: getColorIconMap(formik),
            onPress: () => selectComponent("zona"),
          }}
        />
        <Input
          placeholder="Numero Polin"
          defaultValue={defaultValueIdler || CopyBeltNumber.numeroPolin}
          editable={false}
          onChangeText={() =>
            formik.setFieldValue(
              "numeroPolin",
              defaultValueIdler || CopyBeltNumber.numeroPolin
            )
          }
          errorMessage={formik.errors.numeroPolin}
          rightIcon={{
            type: "material-community",
            name: "numeric",
            // color: getColorIconMap(formik),
            onPress: () => selectComponent("numeroPolin"),
          }}
        />
        <Input
          placeholder="Posicion"
          defaultValue={defaultValuePosition}
          editable={false}
          onChangeText={() =>
            formik.setFieldValue("posicion", defaultValuePosition)
          }
          errorMessage={formik.errors.posicion}
          rightIcon={{
            type: "material-community",
            name: "clipboard-list-outline",
            // color: getColorIconMap(formik),
            onPress: () => selectComponent("posicion"),
          }}
        />
        <Input
          placeholder="Condicion"
          defaultValue={defaultValueCondition}
          editable={false}
          onChangeText={() =>
            formik.setFieldValue("condicion", defaultValueCondition)
          }
          errorMessage={formik.errors.condicion}
          rightIcon={{
            type: "material-community",
            name: "bullseye",
            // color: getColorIconMap(formik),
            onPress: () => selectComponent("condicion"),
          }}
        />
        <Input
          placeholder="Prioridad"
          defaultValue={defaultValuePriority}
          editable={false}
          onChangeText={() =>
            formik.setFieldValue("prioridad", defaultValuePriority)
          }
          errorMessage={formik.errors.prioridad}
          rightIcon={{
            type: "material-community",
            name: "priority-high",
            // color: getColorIconMap(formik),
            onPress: () => selectComponent("prioridad"),
          }}
        />
        <Input
          placeholder="Colocar Observaciones"
          multiline={true}
          inputContainerStyle={styles.textArea}
          onChangeText={(text) => formik.setFieldValue("observacion", text)}
          errorMessage={formik.errors.observacion}
        />
      </View>
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </KeyboardAwareScrollView>
  );
}
