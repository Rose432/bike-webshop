import React, { useState, useRef } from "react";
import Header from "../../componenets/Header/Header";
import Footer from "../../componenets/Footer/Footer";
import Section from "../../componenets/Section/Section";
import PasswordWidget from "../../componenets/PasswordWidget/PasswordWidget";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Fieldset,
  ProfileForm,
  FormRow,
  FormField,
  ErrorMessage,
} from "../../lib/style/formStyle";
import { Button } from "../../lib/style/generalStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserInfo,
  updateUserPassword,
} from "../../features/profile/profileSlice";
import Snackbar from "../../componenets/Snackbar/Snackbar";

const Profile = () => {
  const [isEditingPass, setIsEditingPass] = useState(false);
  const snackbarRef = useRef(null);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const isEmpty = Object.keys(loggedInUser).length === 0;
  const email = loggedInUser.email;

  return (
    <>
      <Header isDiffHead isSecondary />
      <Snackbar ref={snackbarRef} />
      <Section
        isCart
        title={"My Profile"}
        button={
          <Button isFixed onClick={() => setIsEditingPass(!isEditingPass)}>
            {isEditingPass ? "Cancel" : "Edit"}
          </Button>
        }
      >
        <Formik
          initialValues={{
            firstName: isEmpty ? "" : loggedInUser.userInfo.firstName,
            lastName: isEmpty ? "" : loggedInUser.userInfo.lastName,
            email: isEmpty ? "" : loggedInUser.userInfo.email,
            phoneNumber: isEmpty ? "" : loggedInUser.userInfo.phoneNumber,
            adress: isEmpty ? "" : loggedInUser.userInfo.adress,
            city: isEmpty ? "" : loggedInUser.userInfo.city,
            zipPostalCode: isEmpty ? "" : loggedInUser.userInfo.zipPostalCode,
            country: isEmpty ? "" : loggedInUser.userInfo.country,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            phoneNumber: Yup.string().required("Phone number is required"),
            adress: Yup.string().required("Adress is required"),
            city: Yup.string().required("City is required"),
            zipPostalCode: Yup.string().required("Zip/Postal code is required"),
            country: Yup.string().required("Country is required"),
          })}
          onSubmit={async (values, actions) => {
            const userInfo = {
              firstName: values.firstName,
              lastName: values.lastName,
              phoneNumber: values.phoneNumber,
              adress: values.adress,
              city: values.city,
              zipPostalCode: values.zipPostalCode,
              country: values.country,
            };
            await new Promise((r) => setTimeout(r, 500));
            dispatch(updateUserInfo({ userInfo, email }));
          }}
        >
          {(formik) => (
            <Fieldset isProfile>
              <ProfileForm>
                <FormRow>
                  <FormField
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    disabled={formik.isSubmitting || isEditingPass}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    disabled={formik.isSubmitting || isEditingPass}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    disabled={formik.isSubmitting || isEditingPass}
                  />
                  <ErrorMessage component={"div"} name="phoneNumber" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="adress"
                    placeholder="Adress"
                    disabled={formik.isSubmitting || isEditingPass}
                  />
                  <ErrorMessage component={"div"} name="adress" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="city"
                    placeholder="City"
                    disabled={formik.isSubmitting || isEditingPass}
                  />
                  <ErrorMessage component={"div"} name="city" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="zipPostalCode"
                    placeholder="Zip/Postal Code"
                    disabled={formik.isSubmitting || isEditingPass}
                  />
                  <ErrorMessage component={"div"} name="yipPostalCode" />
                </FormRow>
                <FormRow>
                  <FormField
                    type="text"
                    name="country"
                    placeholder="Country"
                    disabled={formik.isSubmitting || isEditingPass}
                  />
                  <ErrorMessage component={"div"} name="country" />
                </FormRow>
                <FormRow isButton>
                  <Button
                    isFixed
                    type="submit"
                    disabled={formik.isSubmitting || isEditingPass}
                  >
                    {formik.isSubmitting ? "Processing..." : "Update"}
                  </Button>
                </FormRow>
              </ProfileForm>
              <PasswordWidget isEditingPass={isEditingPass}>
                {isEditingPass && (
                  <Formik
                    initialValues={{
                      oldPassword: "",
                      newPassword: "",
                      newPasswordConfirmed: "",
                    }}
                    validationSchema={Yup.object({
                      oldPassword: Yup.string().required(
                        "Old password is required"
                      ),
                      newPassword: Yup.string()
                        .required("Password is required")
                        .min(8, "Password must be at least 8 characters long"),
                      newPasswordConfirmed: Yup.string().test(
                        "passwords-match",
                        "passwords must match",
                        function (value) {
                          return this.parent.password === value;
                        }
                      ),
                    })}
                    onSubmit={async (values, actions) => {
                      try {
                        const oldPassword = values.oldPassword;
                        const newPassword = values.newPassword;
                        await new Promise((r) => setTimeout(r, 500));
                        dispatch(
                          updateUserPassword({
                            newPassword,
                            oldPassword,
                            email,
                          })
                        );
                        setIsEditingPass(false);
                      } catch (err) {
                        snackbarRef.current.show(false, err.message);
                        console.error(err.message);
                      }
                    }}
                  >
                    {(formik) => (
                      <ProfileForm>
                        <FormRow>
                          <FormField
                            type="password"
                            name="oldPassword"
                            placeholder="Enter your old password"
                            disabled={formik.isSubmitting}
                          />
                          <ErrorMessage component={"div"} name="oldPassword" />
                        </FormRow>
                        <FormRow>
                          <FormField
                            type="password"
                            name="newPassword"
                            placeholder="Enter your new password"
                            disabled={formik.isSubmitting}
                          />
                          <ErrorMessage component={"div"} name="newPassword" />
                        </FormRow>
                        <FormRow>
                          <FormField
                            type="password"
                            name="confirmedNewPassword"
                            placeholder="Confirm your new password"
                            disabled={formik.isSubmitting}
                          />
                          <ErrorMessage
                            component={"div"}
                            name="confirmedNewPassword"
                          />
                        </FormRow>
                        <FormRow isButton>
                          <Button
                            isOutline
                            isFixed
                            type="submit"
                            disabled={formik.isSubmitting}
                          >
                            {formik.isSubmitting ? "Procesing..." : "Update"}
                          </Button>
                        </FormRow>
                      </ProfileForm>
                    )}
                  </Formik>
                )}
              </PasswordWidget>
            </Fieldset>
          )}
        </Formik>
      </Section>
      <Section isFooter>
        <Footer />
      </Section>
    </>
  );
};

export default Profile;
