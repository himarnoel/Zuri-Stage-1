import * as yup from "yup";
const basicSchema = yup.object().shape({
  email: yup.String().email("please enter a valid email").Required,

  firstName: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, "Please enter valid name")
    .max(40)
    .required(),
  lastname: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, "Please enter valid name")
    .max(40)
    .required(),
  message: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, "Please your message")
    .required(),
});
