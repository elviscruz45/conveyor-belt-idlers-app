import * as Yup from "yup";

export function initialValues() {
  return {
    Plant: "",
    Equipment: "",
    Number: "",
  };
}

export function validationSchema() {
  return Yup.object({
    Belt: Yup.string().required("Selecciona una Faja"),
  });
}
