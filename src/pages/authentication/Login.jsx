import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import IncorrectAuthentication from "../../components/elements/IncorrectAuthentication";

export default function Login() {
  const [error, setError] = useState("");
  const [isShowingError, setIsShowingError] = useState(false);

  const {
    register,
    handleSubmit,
    errors,
    emailPattern,
    passwordPattern,
    defaultRequiredMessage,
    defaultEmailPatternMessage,
    defaultPasswordPatternMessage,
  } = useFormValidation();

  const { logIn, authenticate } = UserAuth();
  const navigate = useNavigate();

  async function onSubmit({ email, password }) {
    try {
      await logIn(email, password);
    } catch (e) {
      setIsShowingError(true);
      setError(e.message);
    } finally {
      authenticate();
      navigate("/account");
    }
  }

  return (
    <>
      <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2">Log In</h1>
          <p className="py-2">
            Don't have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up.
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: defaultRequiredMessage,
                  pattern: {
                    value: emailPattern,
                    message: defaultEmailPatternMessage,
                  },
                })}
                className="authentication-input"
                type="email"
                name="email"
                id="email"
              />
              {errors?.email?.message}
            </div>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", {
                  required: defaultRequiredMessage,
                  pattern: {
                    value: passwordPattern,
                    message: defaultPasswordPatternMessage,
                  },
                })}
                className="authentication-input"
                type="password"
                name="password"
                id="password"
              />
              {errors?.password?.message}
            </div>
            <button className="authentication-button">LOG IN</button>
          </form>
        </div>
      </div>
      {isShowingError && (
        <IncorrectAuthentication closeModal={() => setIsShowingError(false)} />
      )}
    </>
  );
}
