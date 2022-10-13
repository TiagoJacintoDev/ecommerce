import { useForm } from 'react-hook-form';

export default function useFormValidation() {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const defaultRequiredMessage = 'The field must be filled';

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  return {
    register,
    handleSubmit,
    errors,
    emailPattern,
    passwordPattern,
    defaultRequiredMessage,
  };
}
