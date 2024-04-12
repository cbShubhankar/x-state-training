import { Field } from "formik";
import React from "react";
import FormikErrorMessage from "./ErrorMessage";

const FormikAwareSelectDropdown = ({
  name,
  items,
  label,
  defaultOption,
}: {
  items: string[];
  name: string;
  defaultOption?: string;
  label?: string;
}) => {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <label htmlFor="country">{label}</label>
      <Field
        as="select"
        name="country"
        className="border-2 px-2 py-1 rounded-md border-gray-400"
      >
        <option value="">{defaultOption}</option>
        {items.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </Field>
      <FormikErrorMessage name={name} />
    </div>
  );
};

export default FormikAwareSelectDropdown;
