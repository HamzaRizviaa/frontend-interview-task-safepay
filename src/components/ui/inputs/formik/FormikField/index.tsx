//Input Text field with Formik wrapper for formik features

import React from "react";
import { useField } from "formik";
import InputField from "../../InputField";
import { InputFieldProps } from "../../InputField";

const FormikField: React.FC<InputFieldProps> = ({
  name,
  onChange,
  onBlur,
  ...restProps
}) => {
  const [field, meta] = useField(name);

  const {
    onChange: onValueChange, //renmaed to onvaluechange
    onBlur: onFieldBlur,
    value,
    ...rest
  } = field;

  const { touched, error } = meta;

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onValueChange(event);
    if (onChange) onChange(event);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onFieldBlur(event);
    if (onBlur) onBlur(event);
  };

  return (
    <InputField
      {...rest}
      {...restProps}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      error={touched && error ? error : ""}
    />
  );
};

export default FormikField;
