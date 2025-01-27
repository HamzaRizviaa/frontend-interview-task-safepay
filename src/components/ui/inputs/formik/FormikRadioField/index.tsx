import React from "react";
import { useField } from "formik";
import RadioField, { RadioFieldProps } from "../../RadioField";

interface FormikRadioFieldProps
  extends Omit<RadioFieldProps, "value" | "error"> {
  name: string;
}

const FormikRadioField: React.FC<FormikRadioFieldProps> = ({
  name,
  onChange,
  ...restProps
}) => {
  const [field, meta] = useField(name);
  const { value, onChange: formikOnChange } = field;
  const { touched, error } = meta;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formikOnChange(event);
    if (onChange) onChange(event);
  };

  return (
    <RadioField
      {...restProps}
      name={name}
      value={value}
      onChange={handleChange}
      error={touched && error ? error : ""}
    />
  );
};

export default FormikRadioField;
