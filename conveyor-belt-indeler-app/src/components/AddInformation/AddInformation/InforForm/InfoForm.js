import { View, Text } from "react-native";
import { Input } from "@rneui/themed";
import { styles } from "./InforForm.styles";
import React, { useState } from "react";
import { Modal } from "../../../shared/Modal";
import { ChangeDisplayBelt } from "../ChangeDisplayBelt";
import { ChangeDisplayZone } from "../ChangeZoneType";
import { ChangeDisplayIdler } from "../ChangeIdlerNumber";
import { ChangeDisplayPosition } from "../ChangePosition";
import { ChangeDisplayCondition } from "../ChangeCondition";
import { ChangeDisplayPriority } from "../ChangePriority";

import { initialValues } from "../ChangeDisplayBelt/ChangeDisplayBelt.data";
export function InfoForm(props) {
  const { formik } = props;
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);
  const [defaultValueFaja, setDefaultValueFaja] = useState("");
  const [defaultValueZone, setDefaultValueZone] = useState("");
  const [defaultValueIdler, setDefaultValueIdler] = useState("");
  const [defaultValuePosition, setDefaultValuePosition] = useState("");
  const [defaultValueCondition, setDefaultValueCondition] = useState("");
  const [defaultValuePriority, setDefaultValuePriority] = useState("");

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
        />
      );
    }
    if (key === "zona") {
      setRenderComponent(
        <ChangeDisplayZone
          onClose={onCloseOpenModal}
          handlerenderComponentZone={handlerenderComponentZone}
        />
      );
    }
    if (key === "numeroPolin") {
      setRenderComponent(
        <ChangeDisplayIdler
          onClose={onCloseOpenModal}
          handlerenderComponentIdler={handlerenderComponentIdler}
        />
      );
    }
    if (key === "posicion") {
      setRenderComponent(
        <ChangeDisplayPosition
          onClose={onCloseOpenModal}
          handlerenderComponentPosition={handlerenderComponentPosition}
        />
      );
    }
    if (key === "condicion") {
      setRenderComponent(
        <ChangeDisplayCondition
          onClose={onCloseOpenModal}
          handlerenderComponentCondition={handlerenderComponentCondition}
        />
      );
    }
    if (key === "prioridad") {
      setRenderComponent(
        <ChangeDisplayPriority
          onClose={onCloseOpenModal}
          handlerenderComponentPriority={handlerenderComponentPriority}
        />
      );
    }
    onCloseOpenModal();
  };

  return (
    <>
      <Text></Text>
      <View style={styles.content}>
        <Input
          placeholder="Numero de Faja"
          defaultValue={defaultValueFaja}
          editable={false}
          onChangeText={(text) => formik.setFieldValue("numeroFaja", text)}
          errorMessage={formik.errors.numeroFaja}
          rightIcon={{
            type: "material-community",
            name: "tag-multiple-outline",
            // color: getColorIconMap(formik),
            onPress: () => selectComponent("numeroFaja"),
            // onPress: () => console.log("HOla"),
          }}
        />
        <Input
          placeholder="Zona/Tipo"
          defaultValue={defaultValueZone}
          editable={false}
          onChangeText={(text) => formik.setFieldValue("zona", text)}
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
          defaultValue={defaultValueIdler}
          editable={false}
          onChangeText={(text) => formik.setFieldValue("numeroPolin", text)}
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
          onChangeText={(text) => formik.setFieldValue("posicion", text)}
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
          onChangeText={(text) => formik.setFieldValue("condicion", text)}
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
          onChangeText={(text) => formik.setFieldValue("prioridad", text)}
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
          // rightIcon={{
          //   type: "material-community",
          //   name: "text-box-outline",
          //   // color: getColorIconMap(formik),
          //   onPress: () => selectComponent("observacion"),
          // }}
        />
        {/* <Text> {renderComponent}</Text> */}
      </View>
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </>
  );
}
