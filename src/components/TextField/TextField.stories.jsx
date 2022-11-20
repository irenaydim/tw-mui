import React from 'react';
import TextField from './TextField';


const TextFieldStory = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    label: {
      defaultValue: 'Label',
      control: 'text'
    },
    value: {
      defaultValue: '',
      control: 'text'
    },
    placeholder: {
      defaultValue: 'placeholder',
      control: 'text'
    },
    error: {
      defaultValue: '',
      control: 'text'
    },
  },
};

const Template = ({ label, disabled, value, placeholder, error }) => (<>
    <TextField
        name="text-field"
        value={value}
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        error={error} />
    </>
)

export const Primary = Template.bind({})
Primary.storyName = 'TextField'

export default TextFieldStory
