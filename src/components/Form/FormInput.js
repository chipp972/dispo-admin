// @flow
import React from 'react';
import { Select, InputLabel, MenuItem, Input, TextField } from 'material-ui';
import type { InputDescription } from './Form';

export interface FormInputProps extends InputDescription {
  selectOptions: Array<{ _id: string, label: string }>;
  handleInputChange: string => any;
  value: string;
}

export const FormInput = ({
  id,
  label,
  type,
  helperText,
  selectOptions,
  handleInputChange,
  value,
  disabled,
  isValid
}: FormInputProps) => {
  switch (type) {
    case 'select':
      return [
        <InputLabel key={`inputlabel_${id}`} htmlFor={id}>
          {label}
        </InputLabel>,
        <Select
          key={id}
          value={value}
          onChange={handleInputChange(id)}
          input={<Input id={id} />}
          disabled={disabled}
        >
          {selectOptions.map(option => (
            <MenuItem key={option._id} value={option._id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      ];
    case 'file':
      return [
        <InputLabel key={`inputlabel_${id}`} htmlFor={id}>
          {label}
        </InputLabel>,
        <Input
          id={id}
          name={id}
          key={`inputfile_${id}`}
          type={type}
          onChange={handleInputChange(id)}
          error={isValid && !isValid(value)}
          disabled={disabled}
        />
      ];
    default:
      return (
        <TextField
          id={id}
          name={id}
          label={label}
          type={type}
          value={value}
          error={isValid && !isValid(value)}
          onChange={handleInputChange(id)}
          margin="normal"
          disabled={disabled}
        />
      );
  }
};
