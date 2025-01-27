import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import { isNumber, isGPA } from "../../../../data/helpers/commonHelpers";

import {
  InputFieldContainer,
  InputLabel,
  LabelsContainer,
  RightLabel,
  SearchIcon,
  StyledTextField,
} from "./styledComponents";

export type InputFieldProps = {
  name: string;
  value?: string;
  label?: string;
  minRows?: number;
  type?: string;
  maxLength?: number;
  error?: string;
  endIcon?: boolean;
  allowOnlyNumbers?: boolean;
  allowGPA?: boolean;
  isEdit?: boolean;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onIconClick?: React.MouseEventHandler<SVGSVGElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  placeholder?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  value,
  label,
  type,
  minRows,
  maxLength,
  error,
  endIcon,
  allowOnlyNumbers = false,
  allowGPA = false,
  onChange,
  onIconClick,
  onKeyDown,
  isEdit,
  ...restProps
}) => {
  const [innerValue, setInnerValue] = useState("");

  //validates fields if they have numbers/gpa props and fires onChange
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    if (allowOnlyNumbers && inputValue && !isNumber(inputValue)) {
      return;
    } else if (allowGPA && inputValue && !isGPA(inputValue)) {
      return;
    }
    setInnerValue(event.target.value);

    if (onChange) onChange(event);
  };

  const inputLength = isEdit
    ? value?.toString().length
    : value?.length || innerValue?.length || 0;

  const inputError = !!error;

  return (
    <InputFieldContainer>
      {(!!label || !!maxLength) && (
        <LabelsContainer>
          <InputLabel error={inputError}>{label}</InputLabel>
          {!!maxLength && (
            <RightLabel>
              {" "}
              {inputLength}/ {maxLength}
            </RightLabel>
          )}
        </LabelsContainer>
      )}

      <StyledTextField
        {...restProps}
        onKeyDown={onKeyDown}
        autoComplete="off"
        type={type}
        onChange={handleChange}
        value={value || innerValue}
        size="small"
        minRows={minRows}
        fullWidth
        inputProps={{ maxLength }}
        InputProps={{
          endAdornment: !!endIcon && (
            <InputAdornment position="end">
              <SearchIcon onClick={onIconClick} />
            </InputAdornment>
          ),
        }}
        helperText={error}
      />
    </InputFieldContainer>
  );
};

export default InputField;
