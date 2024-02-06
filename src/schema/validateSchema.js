import { z } from "zod";
import * as yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
// const validateSchemaSignUp = (t) => {
//   const signUpFormSchema = z
//     .object({
//       name: z
//         .string({ required_error: t.userNameRequire })
//         .min(3, t.userNameValidateLong),
//       lastName: z
//         .string({ required_error: t.lastNameRequire })
//         .min(3, t.lastNameValidateLong),
//       email: z
//         .string({ required_error: t.emailRequire })
//         .email(t.emailValidate),
//       password: z
//         .string({ required_error: t.passwordRequire })
//         .min(8, t.passwordvalidate),
//       confrimPassword: z
//         .string({ required_error: t.confrimPasswordRequire })
//         .min(8, t.confrimPassword),
//     })
//     .refine((data) => data.password === data.confrimPassword, {
//       message: t.passMatch,
//       path: ["confirmPassword"],
//     });

//   return signUpFormSchema;
// };
const validateSchemaSignUp = (t) => {
  const signUpFormSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, t.userNameValidateLong)
      .required(t.userNameRequire),
    lastName: yup
      .string()
      .min(3, t.lastNameValidateLong)
      .required(t.lastNameRequire),
    email: yup.string().email(t.emailValidate).required(t.emailRequire),
    password: yup
      .string()
      .matches(passwordRules, {
        message: t.passRules,
      })
      .min(8, t.passwordvalidate)
      .required(t.passwordRequire),
    confrimPassword: yup
      .string()
      .oneOf([yup.ref("password")], t.passMatch)
      .required(t.confrimPasswordRequire),
  });
  return signUpFormSchema;
};
const validateSchemaChangeAccountDetails = (t) => {
  const signUpFormSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, t.userNameValidateLong)
      .required(t.userNameRequire),
    lastName: yup
      .string()
      .min(3, t.lastNameValidateLong)
      .required(t.lastNameRequire),
    password: yup
      .string()
      .min(8, t.passwordvalidate)
      .required(t.passwordRequire),
  });
  return signUpFormSchema;
};
const validateSchemaSignIn = (t) => {
  const signUpFormSchema = yup.object().shape({
    email: yup.string().email(t.emailValidate).required(t.emailRequire),
    password: yup
      .string()
      .matches(passwordRules, {
        message: t.passRules,
      })
      .min(8, t.passwordvalidate)
      .required(t.passwordRequire),
  });
  return signUpFormSchema;
};

export { validateSchemaSignUp, validateSchemaSignIn , validateSchemaChangeAccountDetails };
