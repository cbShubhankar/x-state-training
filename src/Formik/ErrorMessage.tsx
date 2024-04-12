import { useField } from "formik";
import React from "react";

const FormikErrorMessage = ({
  name,
  errorClassName,
}: {
  name: string;
  errorClassName?: string;
}) => {
  const [field, meta] = useField<string>(name);
  return (
    <>
      {meta.error && meta.touched && (
        <div className={`text-red-600 ${errorClassName}`}>{meta.error}</div>
      )}
    </>
  );
};

export default FormikErrorMessage;
