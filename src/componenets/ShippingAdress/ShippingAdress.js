import React from "react";
import { useState, useEffect } from "react";
import {
  ShippingAdress,
  StepTitle,
  Fieldset,
  Form,
  FormRow,
  FormField,
  ErrorMessage,
  ButtonContainer,
  Select,
  Option,
  ButtonNav,
} from "./ShippingAdressStyle";
import { Button } from "../../lib/style/generalStyle";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { commerce } from "../../lib/commerce";

const DetectShippingCountry = ({ setShippingCountry }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    values.shippingCountry !== "" && setShippingCountry(values.shippingCountry);
  }, [values]);

  return null;
};

const DetectShippingSubdivision = ({ setShippingSubdivision }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    values.shippingSubdivision !== "" &&
      setShippingSubdivision(values.shippingSubdivision);
  }, [values]);

  return null;
};

const CheckoutPage = ({ children, checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
  const options = shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description} - (${option.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutTokenId
      );
      setShippingCountries(countries);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchShippingSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    try {
      const options = await commerce.checkout.getShippingOptions(
        checkoutTokenId,
        { country, region }
      );
      setShippingOptions(options);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken?.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  return (
    <ShippingAdress>
      <StepTitle>Shipping adress</StepTitle>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          adress: "",
          city: "",
          zipPostalCode: "",
          shippingCountry: "",
          shippingSubdivision: "",
          shippingOption: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          phoneNumber: Yup.string().required("Phone number is required"),
          adress: Yup.string().required("Address is required"),
          city: Yup.string().required("City is required"),
          zipPostalCode: Yup.string().required("Zip/Postal code is required"),
          shippingCountry: Yup.string().required(
            "Shipping Country is required"
          ),
          shippingSubdivision: Yup.string().required(
            "Shipping Subdivision is required"
          ),
          shippingOption: Yup.string().required("Shipping option is required"),
        })}
        onSubmit={(values, actions) => {
          next(values);
        }}
      >
        {(formik) => (
          <Fieldset>
            <Form>
              <FormRow>
                <FormField
                  type="text"
                  name="firstName"
                  placeholder="First name*"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="firstName" />
              </FormRow>
              <FormRow>
                <FormField
                  type="text"
                  name="lastName"
                  placeholder="Last name*"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="lastName" />
              </FormRow>
              <FormRow>
                <FormField
                  type="text"
                  name="email"
                  placeholder="Email*"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="email" />
              </FormRow>
              <FormRow>
                <FormField
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number*"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="phoneNumber" />
              </FormRow>
              <FormRow>
                <FormField
                  type="text"
                  name="adress"
                  placeholder="Adress*"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="adress" />
              </FormRow>
              <FormRow>
                <FormField
                  type="text"
                  name="city"
                  placeholder="City*"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="city" />
              </FormRow>
              <FormRow>
                <FormField
                  type="text"
                  name="zipPostalCode"
                  placeholder="Zip/Postal Code*"
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="zipPostalCode" />
              </FormRow>
              <FormRow>
                <Select
                  {...formik.getFieldProps("shippingCountry")}
                  disabled={formik.isSubmitting}
                  id="shippingCountry"
                >
                  <Option value="" hidden>
                    Select Country
                  </Option>
                  {countries.map((country) => (
                    <Option key={country.id} value={country.id}>
                      {country.label}
                    </Option>
                  ))}
                </Select>
                <DetectShippingCountry
                  setShippingCountry={setShippingCountry}
                />
                <ErrorMessage component={"div"} name="shippingCountry" />
              </FormRow>
              <FormRow>
                <Select
                  {...formik.getFieldProps("shippingSubdivision")}
                  disabled={formik.isSubmitting}
                  id="shippingSubdivison"
                >
                  <Option value="" hidden>
                    Shipping Subdivision
                  </Option>
                  {subdivisions.map((subdivision) => (
                    <Option key={subdivision.id} value={subdivision.id}>
                      {subdivision.label}
                    </Option>
                  ))}
                </Select>
                <DetectShippingSubdivision
                  setShippingSubdivision={setShippingSubdivision}
                />
                <ErrorMessage component={"div"} name="shippingSubdivision" />
              </FormRow>
              <FormRow>
                <Select
                  {...formik.getFieldProps("shippingOption")}
                  disabled={formik.isSubmitting}
                  id="shippingOption"
                >
                  <Option value="" hidden>
                    Shipping Options
                  </Option>
                  {options.map((option) => (
                    <Option key={option.id} value={option.id}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
                <ErrorMessage component={"div"} name="shippingOption" />
              </FormRow>
              <ButtonContainer>
                <ButtonNav to="/cart">
                  <Button isFixed>Back to Cart</Button>
                </ButtonNav>
                <Button
                  disabled={formik.isSubmitting}
                  type="submit"
                  isFixed
                  isCheckout
                >
                  Next
                </Button>
              </ButtonContainer>
            </Form>
          </Fieldset>
        )}
      </Formik>
    </ShippingAdress>
  );
};

export default CheckoutPage;
