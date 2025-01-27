import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import {
  RadioFieldContainer,
  LabelContainer,
  InputLabel,
  StyledRadioGroup,
} from "./styledComponents";

export type RadioFieldOption = {
  value: string;
  label: string;
};

export type RadioFieldProps = {
  name: string;
  label?: string;
  error?: string;
  value?: string;
  options: RadioFieldOption[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const RadioField: React.FC<RadioFieldProps> = ({
  name,
  label,
  error,
  value,
  options,
  onChange,
}) => {
  const hasError = Boolean(error);

  return (
    <RadioFieldContainer>
      {label && (
        <LabelContainer>
          <InputLabel error={hasError}>{label}</InputLabel>
        </LabelContainer>
      )}

      <FormControl error={hasError} component="fieldset" variant="standard">
        <StyledRadioGroup
          name={name}
          value={value || ""}
          onChange={onChange}
          row
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </StyledRadioGroup>

        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </RadioFieldContainer>
  );
};

export default RadioField;
