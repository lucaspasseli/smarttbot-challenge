import * as yup from "yup";

export const registerSchema = yup.object().shape({
  title: yup
    .string()
    .required("O robô precisa de um nome")
    .max(18, "O nome precisa ter até 18 caractéres"),
  initial_capital: yup
    .number()
    .transform((initial_capital) =>
      isNaN(initial_capital) ? undefined : initial_capital
    )
    .required("O robô precisa de um capital inicial")
    .min(10, "O capital precisa ser acima de RS 10,00"),
});
