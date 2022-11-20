import React from 'react'
import Chip from './Chip'

const ChipStory = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    icon: {
      options: ['circle', 'clear'],
      type: 'select'
    },
  },
  parameters: {
    docs: {
      description: {
        component: `- [MUI Docs](https://m3.material.io/components/chips/)`
      }
    }
  },
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
}

const Template = (args) => <Chip {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Chip'
Primary.args = {
  text: 'chip'
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/tS4a8T0hJcSB9pfNitJi0U/Material-3-Design-Kit-(Community)?node-id=50994%3A6713',
  },
}

export default ChipStory
