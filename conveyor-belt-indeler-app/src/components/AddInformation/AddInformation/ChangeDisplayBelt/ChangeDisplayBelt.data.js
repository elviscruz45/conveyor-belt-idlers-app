import * as Yup from "yup";

export function initialValues() {
  return {
    Plant: "C1",
    Number1: "1",
    Number2: "1",
  };
}

export function validationSchema() {
  return Yup.object({
    Plant: Yup.string().required("Selecciona una Faja"),
    Number1: Yup.string().required("Selecciona una Numero"),
    Number2: Yup.string().required("Selecciona una Numero"),
  });
}
