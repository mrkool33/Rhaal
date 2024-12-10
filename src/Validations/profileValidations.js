import * as yup from "yup";

export const ProfileValidations=yup.object().shape({
    vfname:yup.string().required("name cannot be empty").max(15,"Maximum 15 charecters"),
    vlname:yup.string().required("name cannot be empty").max(15,"Maximum 15 charecters"),
    vphone:yup.string().min(8,"Minimum 8 characters").matches(/^(9|7)\d*$/, "Phone number must start with 9 or 7").required("Phone number is required"),
    
});
export default ProfileValidations;