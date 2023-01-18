import * as yup from 'yup';

export const schemaDashboard = yup.object({
  amount: yup.string().required('O valor da venda é obrigatório'),
  installments: yup.string().required('O valor da parcela é obrigatório'),
  mdr: yup.string().required('O percentual é obrigatório'),
});
