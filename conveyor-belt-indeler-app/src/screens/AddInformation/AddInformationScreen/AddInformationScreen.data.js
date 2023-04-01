import * as Yup from "yup";
export function initialValues() {
  return {
    numeroFaja: "",
    zona: "",
    numeroPolin: "",
    posicion: "",
    condicion: "",
    prioridad: "",
    observacion: "",
  };
}

export function validationSchema() {
  return Yup.object({
    numeroFaja: Yup.string().required("Campo obligatorio"),
    zona: Yup.string().required("Campo obligatorio"),
    numeroPolin: Yup.number().required("Campo obligatorio"),
    posicion: Yup.string().required("Campo obligatorio"),
    condicion: Yup.string().required("Campo obligatorio"),
    prioridad: Yup.number().required("Campo obligatorio"),
  });
}
