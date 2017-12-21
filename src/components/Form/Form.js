// @flow
import React, { Component } from 'react';
import { FormControl, FormHelperText, Button } from 'material-ui';
import { FormInput } from './FormInput';

export type InputDescription = {
  id: string,
  label: string,
  helperText?: string,
  type: 'select' | 'text' | 'date' | 'password',
  disabled?: boolean
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

  handleInputChange = (name: string) => (event: SyntheticEvent<*>) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form style={{ display: 'flex', flexFlow: 'column wrap', padding: 20 }}>
        {this.props.inputs.map((inputDescription: InputDescription) => (
          <FormControl
            key={`formcontrol_${inputDescription.id}`}
            disabled={inputDescription.disabled}
            style={{ paddingBottom: 20 }}
          >
            <FormInput
              {...inputDescription}
              handleInputChange={this.handleInputChange}
              value={this.state[inputDescription.id]}
              selectOptions={
                this.props.selectOptions &&
                this.props.selectOptions[inputDescription.id]
              }
            />
            {inputDescription.helperText ? (
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
