import React from 'react';
import Switch from './Switch';


const SwitchStory = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: {
      defaultValue: false,
      control: 'boolean'
    },
    label: {
      defaultValue: 'Label',
      control: 'text'
    }
  },
};

const Template = ({ checked, label }) => (<>
    <Switch checked={checked} label={label} />
    </>
)

export const Primary = Template.bind({})
Primary.storyName = 'Switch'

export default SwitchStory
