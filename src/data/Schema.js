import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must be at least 1 character")
    .max(50, "Maxmum 50 characters")
    .required("Required"),
  organisationNr: Yup.string().trim().max(30, "Maxmum characters 30"),
  vatNr: Yup.string()
    .trim()
    .matches(/^se\d{10}$/i, "SE + 10 digits: SE1234567890")
    .required("Required"),
  reference: Yup.string().trim().max(50, "Maxmum 50 characters"),
  paymentTerm: Yup.string()
    .matches(
      /^(\d|\d{1,9}|1\d{1,9}|20\d{8}|213\d{7}|2146\d{6}|21473\d{5}|214747\d{4}|2147482\d{3}|21474835\d{2}|214748364[0-7])$/,
      "Input a number between 0 and 2147483647"
    )
    .required("Required"),
  website: Yup.string()
    .trim()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .max(50, "Maxmum 50 characters"),
  email: Yup.string()
    .email("Invalid format email-address")
    .max(254, "Maxmum 254 characters"),
  phoneNumber: Yup.string().matches(
    /^(?=(.*\d){8})[a-zA-Z\d]{10,20}$/,
    "Minmun 10, Maxmum 20 digital"
  ),
});

const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[!.-])(?=.*[a-zA-Z]).{8,}$/;
export const schemaRegister = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Must be at least 1 character")
    .max(30, "Maxmum 50 characters."),
  lastName: Yup.string()
    .min(1, "Must be at least 1 character")
    .max(30, "Maxmum 50 characters."),
  email: Yup.string()
    .email("Invalid format email-address")
    .max(254, "Maxmum 254 characters")
    .required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(1, "At least 1 character.")
    .matches(
      REGEX_PASSWORD,
      "Password needs to contain at least 1 number, 1 char and 1 of (! , -)"
    ),
  organisationName: Yup.string(),
  organisationKind: Yup.mixed().oneOf(["0", "1", "2"]),
});
