import * as yup from "yup";

export const schemaDashboard = yup.object({
  amount: yup
    .number()
    .typeError("Informe um número")
    .required("O valor da venda é obrigatório"),
  installments: yup
    .number()
    .typeError("Informe um número")
    .min(1, "Deverá ser um número maior ou igual a 1")
    .max(12, "Máximo  12 parcelas")
    .required("O valor da parcela é obrigatório"),
  mdr: yup
    .number()
    .typeError("Informe um número")
    .min(0.01, "Informe um número maior que 0.01")
    .required("O percentual é obrigatório"),
});
