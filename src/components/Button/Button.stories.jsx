import React from 'react'
import Button from './Button'

const ButtonStory = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      disable: true
    }
  },
  parameters: {
    docs: {
      description: {
        component: `- [M3 Docs](https://m3.material.io/components/buttons/specs)`
      }
    }
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Button'
Primary.args = {
  label: 'Button',
  type: 'button',
  disabled: false,
  primary: true,
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/tS4a8T0hJcSB9pfNitJi0U/Material-3-Design-Kit-(Community)?node-id=50716%3A11360',
  },
}

export default ButtonStory
