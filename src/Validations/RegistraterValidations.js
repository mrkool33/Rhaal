import * as yup from "yup";

export const RegisterValidations=yup.object().shape({
    vfname:yup.string().required("name cannot be empty").max(15,"Maximum 15 charecters"),
    vlname:yup.string().required("name cannot be empty").max(15,"Maximum 15 charecters"),
    vemail:yup.string().email("incarect email format").required("email cannot be empty"),
    vpassword:yup.string().min(6,"Minimum 6 characters").max(15,"Maximum 15 charecters"),
    vpasswordConfirmation:yup.string().oneOf([yup.ref('vpassword'),null],'Password not match'),
    vphone:yup.string().min(8,"Minimum 8 characters").matches(/^(9|7)\d*$/, "Phone number must start with 9 or 7").required("Phone number is required"),
    
});
export default RegisterValidations;