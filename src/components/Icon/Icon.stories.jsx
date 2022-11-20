import React from 'react'
import Icon from './Icon'

const IconStory = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'select', options: ['circle', 'clear', 'radio-checked', 'radio-unchecked'] },
    type: { options: ['filled', 'outlined', 'rounded', 'two-tone', 'sharp'] },
  },
  parameters: {
    docs: {
      description: {
        component: `- [MUI Docs](https://mui.com/material-ui/material-icons)`
      }
    }
  },
  decorators: [
    (Story) => (
      <div className='h-10 w-10 text-primary-main'>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Icon'
Primary.args = {
  name: 'circle',
  type: 'filled'
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Jz0uTOkXSIBRd6OtnSTOvI/Material-3-Design-Kit-(Community)?node-id=49848%3A6285',
  },
}

export default IconStory
