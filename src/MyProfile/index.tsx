import React from "react";
import { Formik, Form, Field } from "formik";
import { ZodError, z } from "zod";
import FormikErrorMessage from "../Formik/ErrorMessage";
import FormikAwareTextInput from "../Formik/FormikAwareTextInput";
import { toFormikValidationSchema } from "zod-formik-adapter";
import FormikAwareSelectDropdown from "../Formik/FormikAwareSelectDropdown";

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  age: "",
  country: "",
  state: "",
  city: "",
};

// Define Zod schema for validation
const profileSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }),
  lastName: z.string({ required_error: "Last name is required" }),
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .positive(),
  country: z.string({
    required_error: "Country is required",
  }),
  state: z.string({ required_error: "State is required" }),
  city: z.string({
    required_error: "City is required",
  }),
});

const countries = ["Country 1", "Country 2", "Country 3"];
const states = ["State 1", "State 2", "State 3"];
const cities = ["City 1", "City 2", "City 3"];

// const validateForm = function <T>(values: T) {
//   try {
//     profileSchema.parse(values);
//   } catch (error) {
//     if (error instanceof ZodError) {
//       return error.formErrors.fieldErrors;
//     }
//   }
// };
const MyProfilePage = () => {
  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl">My Profile</h1>
      <div className="w-full flex justify-center items-center">
        <div className="w-1/3">
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={toFormikValidationSchema(profileSchema)}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Submitted values:", values);
              setSubmitting(false);
            }}
            // validate={validateForm}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* <div> */}
                <FormikAwareTextInput
                  name="firstName"
                  placeholder="Enter first name"
                  label="First Name"
                />
                {/* </div> */}
                {/* <div> */}
                <FormikAwareTextInput
                  name="lastName"
                  placeholder="Last  Name"
                  label="Last Name"
                />
                {/* </div> */}
                {/* <div> */}
                <FormikAwareTextInput
                  type="number"
                  name="age"
                  label="Age"
                  placeholder="Age"
                />
                {/* </div> */}
                {/* <div> */}
                <FormikAwareSelectDropdown
                  label="Country"
                  name="country"
                  items={countries}
                  defaultOption="Select Country"
                />
                {/* </div> */}
                {/* <div> */}
                <FormikAwareSelectDropdown
                  label="State"
                  name="state"
                  items={states}
                  defaultOption="Select State"
                />
                {/* <label htmlFor="state">State</label> */}
                {/* <Field as="select" name="state">
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Field>
                <FormikErrorMessage name="state" /> */}
                {/* </div> */}

                {/* <div> */}
                <FormikAwareSelectDropdown
                  label="City"
                  name="city"
                  items={cities}
                  defaultOption="Select City"
                />
                {/* <label htmlFor="city">City</label>
                <Field as="select" name="city">
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Field>
                <FormikErrorMessage name="city" /> */}
                {/* </div> */}
                <button
                  type="submit"
                  className="bg-orange-500 px-3 py-1 rounded-md w-full mt-4"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
