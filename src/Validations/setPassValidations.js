import * as yup from "yup";

export const setPassValidations=yup.object().shape({
   
    vpassword:yup.string().min(6,"Minimum 6 characters").max(15,"Maximum 15 charecters"),
    vpasswordConfirmation:yup.string().oneOf([yup.ref('vpassword'),null],'Password not match'),
    
});
export default setPassValidations;