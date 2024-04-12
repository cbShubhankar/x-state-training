import { Field } from "formik";
import React from "react";
import FormikErrorMessage from "./ErrorMessage";

const FormikAwareTextInput = ({
  name,
  className,
  placeholder,
  label,
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) => {
  return (
    <div className="mb-4 flex flex-col justify-center gap-2 w-full">
      <label htmlFor={name}>{label}</label>
      <Field
        type="text"
        name={name}
        placeholder={placeholder}
        style={{ borderRadius: "6px" }}
        className={`w-full border-2 px-2 py-1 border-gray-400 ${className}`}
      />
      <FormikErrorMessage name={name || ""} />
    </div>
  );
};

export default FormikAwareTextInput;
