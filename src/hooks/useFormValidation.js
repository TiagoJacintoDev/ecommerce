import { useForm } from "react-hook-form";

export const useFormValidation = () => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const cellNumberPattern = /^9\d{8}$/;
  const defaultRequiredMessage = "The field must be filled";
  const defaultEmailPatternMessage = "Email is invalid";
  const defaultPasswordPatternMessage = "Password is invalid";
  const defaultCellPhonePatternMessage = "Cell number is invalid";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return {
    register,
    handleSubmit,
    reset,
    errors,
    emailPattern,
    cellNumberPattern,
    passwordPattern,
    defaultRequiredMessage,
    defaultEmailPatternMessage,
    defaultPasswordPatternMessage,
    defaultCellPhonePatternMessage,
  };
};
