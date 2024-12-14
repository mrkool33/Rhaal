import * as yup from "yup";

export const ProfileValidations = yup.object().shape({
  vfname: yup
    .string()
    .required("name cannot be empty")
    .max(15, "Maximum 15 charecters"),
  vlname: yup
    .string()
    .required("name cannot be empty")
    .max(15, "Maximum 15 charecters"),
  vphone: yup
    .string()
    .min(8, "Minimum 8 characters")
    .matches(/^(9|7)\d*$/, "Phone number must start with 9 or 7")
    .required("Phone number is required"),

  firstName: yup
    .string()
    .required("First name is required.")
    .matches(/^[a-zA-Z\s]+$/, "First name must only contain letters.")
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name must not exceed 50 characters."),
  lastName: yup
    .string()
    .required("Last name is required.")
    .matches(/^[a-zA-Z\s]+$/, "Last name must only contain letters.")
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name must not exceed 50 characters."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Enter a valid email address."),
  phoneNumber: yup
    .string()
    .required("Phone number is required.")
    .matches(
      /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10,15}$/,
      "Enter a valid phone number."
    ),
});
export default ProfileValidations;
