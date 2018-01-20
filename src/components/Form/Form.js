// @flow
import React, { Component } from 'react';
import { FormControl, FormHelperText, Button } from 'material-ui';
import { compose, filter, not, propEq } from 'ramda';
import { FormInput } from './FormInput';

export type InputDescription = {
  id: string,
  label: string,
  type: 'select' | 'text' | 'date' | 'password',
  disabled?: boolean,
  isValid?: (value: string) => boolean,
  helperText?: string,
  isFiltered?: boolean
};

export type FormProps<T> = {
  initialState: T,
  inputs: InputDescription[],
  onSubmit: (formData: any) => any,
  onSubmitLabel: string,
  isSubmitDisabled?: boolean,
  selectOptions?: {
    [selectInput: string]: Array<{ _id: string, label: string }>
  }
};

export class Form<T> extends Component<FormProps<T>, *> {
  constructor(props: any) {
    super(props);
    this.state = props.initialState;
  }

  getInputValue = (event: SyntheticEvent<*>): any => {
    const { type, checked, value, files } = event.target;
    switch (type) {
      case 'checkbox':
        return checked;
      case 'file':
        return files[0];
      default:
        return value;
    }
  };

  handleInputChange = (name: string) => (event: SyntheticEvent<*>) => {
    const value = this.getInputValue(event);
    this.setState({
      [name]: value
    });
  };

  render() {
    const isInvalid = (inputDescription: InputDescription) =>
      inputDescription.isValid &&
      !inputDescription.isValid(this.state[inputDescription.id]);
    return (
      <form
        style={{ display: 'flex', flexFlow: 'column wrap', padding: 20 }}
        encType="multipart/form-data"
      >
        {filter(compose(not, propEq('isFiltered', true)))(
          this.props.inputs
        ).map((inputDescription: InputDescription) => (
          <FormControl
            key={`formcontrol_${inputDescription.id}`}
            disabled={inputDescription.disabled}
            style={{ paddingBottom: 20 }}
            error={isInvalid(inputDescription)}
          >
            <FormInput
              {...inputDescription}
              handleInputChange={this.handleInputChange}
              value={this.state[inputDescription.id] || ''}
              selectOptions={
                this.props.selectOptions &&
                this.props.selectOptions[inputDescription.id]
              }
            />
            {inputDescription.helperText && isInvalid(inputDescription) ? (
              <FormHelperText>{inputDescription.helperText}</FormHelperText>
            ) : (
              <div />
            )}
          </FormControl>
        ))}
        <Button
          raised
          disabled={this.props.isSubmitDisabled}
          color="primary"
          style={{ padding: 10 }}
          onClick={() => this.props.onSubmit(this.state)}
        >
          {this.props.onSubmitLabel}
        </Button>
      </form>
    );
  }
}
