import * as yup from 'yup';

export const LoginValidations = yup.object().shape({
    email: yup.string().email("Incorrect Email Format").required("Email cannot be empty"),
    password: yup.string().min(6,"Minimum 6 characters").max(10,"Maximum 10 characters")
});

