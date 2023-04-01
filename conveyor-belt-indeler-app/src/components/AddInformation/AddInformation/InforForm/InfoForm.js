import { View, Text } from "react-native";
import { Input } from "@rneui/themed";
import { styles } from "./InforForm.styles";
import React, { useState } from "react";
import { Modal } from "../../../shared/Modal";
import { ChangeDisplayBelt, Pickermode } from "../ChangeDisplayBelt";
export function InfoForm(props) {
  const { formik } = props;
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);

  const selectComponent = (key) => {
    if (key === "numeroFaja") {
      setRenderComponent(<ChangeDisplayBelt onClose={onCloseOpenModal} />);
      console.log(renderComponent);
    }
    if (key === "zona") {
      setRenderComponent(<Pickermode onClose={onCloseOpenModal} />);
    }
    if (key === "numeroPolin") {
    }
    if (key === "posicion") {
    }
    if (key === "condicion") {
    }
    if (key === "prioridad") {
    }
    onCloseOpenModal();
  };

  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Numero de Faja"
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
          rightIcon={{
            type: "material-community",
            name: "multicast",
            // color: getColorIconMap(formik),
            onPress: () => selectComponent("zona"),
          }}
          onChangeText={(text) => formik.setFieldValue("zona", text)}
          errorMessage={formik.errors.zona}
        />
        <Input
          placeholder="Numero Polin"
          onChangeText={(text) => formik.setFieldValue("numeroPolin", text)}
          errorMessage={formik.errors.numeroPolin}
          rightIcon={{
            type: "material-community",
            name: "numeric",
            // color: getColorIconMap(formik),
            //  onPress: onOpenCloseMap,
          }}
        />
        <Input
          placeholder="Posicion"
          onChangeText={(text) => formik.setFieldValue("posicion", text)}
          errorMessage={formik.errors.posicion}
          rightIcon={{
            type: "material-community",
            name: "clipboard-list-outline",
            // color: getColorIconMap(formik),
            // onPress: onOpenCloseMap,
          }}
        />
        <Input
          placeholder="Condicion"
          rightIcon={{
            type: "material-community",
            name: "bullseye",
            // color: getColorIconMap(formik),
            // onPress: onOpenCloseMap,
          }}
          onChangeText={(text) => formik.setFieldValue("condicion", text)}
          errorMessage={formik.errors.condicion}
        />
        <Input
          placeholder="Prioridad"
          rightIcon={{
            type: "material-community",
            name: "priority-high",
            // color: getColorIconMap(formik),
            // onPress: onOpenCloseMap,
          }}
          onChangeText={(text) => formik.setFieldValue("prioridad", text)}
          errorMessage={formik.errors.prioridad}
        />
        <Input
          placeholder="Observaciones"
          multiline={true}
          inputContainerStyle={styles.textArea}
          rightIcon={{
            type: "material-community",
            name: "text-box-outline",
            // color: getColorIconMap(formik),
            // onPress: onOpenCloseMap,
          }}
          onChangeText={(text) => formik.setFieldValue("observacion", text)}
          errorMessage={formik.errors.observacion}
        />
        {/* <Text> {renderComponent}</Text> */}
      </View>
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </>
  );
}
