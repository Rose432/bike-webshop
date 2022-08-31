import { useRef, useEffect, useContext } from "react";
import Header from "../../componenets/Header/Header";
import Section from "../../componenets/Section/Section";
import Footer from "../../componenets/Footer/Footer";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Fieldset,
  LoginForm,
  FormRow,
  FormField,
  ErrorMessage,
} from "../../lib/style/formStyle";
import { Button } from "../../lib/style/generalStyle";
import Snackbar from "../../componenets/Snackbar/Snackbar";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/profile/profileSlice";

const Login = () => {
  const { setIsLoggedin } = useContext(AuthContext);
  const dispatch = useDispatch();
  const snackbarRef = useRef(null);

  useEffect(() => {
    const snackbar = localStorage.getItem("showSnackbar");
    snackbar && snackbarRef.current.show(true, "Registered successfully");
    return localStorage.removeItem("showSnackbar");
  }, []);

  return (
    <>
      <Header
        isDiffHead
        isSecondary
      />
        <Snackbar ref={snackbarRef} />
      <Section isUserAuth title={"Log In"}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            try {
              await new Promise((r) => setTimeout(r, 500));
              dispatch(
                loginUser({ email: values.email, password: values.password })
              );
              localStorage.setItem("accessToken", "JWT TOKEN");
              localStorage.setItem("showSnackbar", "true");
              const token = localStorage.getItem("accessToken") !== null;
              token && setIsLoggedin(token);
              actions.resetForm({
                email: "",
                password: "",
              });
            } catch (err) {
              snackbarRef.current.show(false, err.message);
              console.error(err.message);
            }
          }}
        >
          {(formik) => (
            <Fieldset>
              <LoginForm>
                <FormRow>
                  <FormField
                    type="email"
                    name="email"
                    placeholder="Email"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="password"
                    name="password"
                    placeholder="Password"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="password" />
                </FormRow>
                <FormRow isButton>
                  <Button isFixed type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? "Processing..." : "Log In"}
                  </Button>
                </FormRow>
              </LoginForm>
            </Fieldset>
          )}
        </Formik>
      </Section>
      <Section isFooter children={<Footer />} />
    </>
  );
};

export default Login;
