import React from 'react'
import Card from './Card'

const CardStory = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: `- [M3 Docs](https://m3.material.io/components/cards/specs)`
      }
    }
  }
}

const Template = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Card'
Primary.args = {
  headline: 'Card'
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/tS4a8T0hJcSB9pfNitJi0U/Material-3-Design-Kit-(Community)?node-id=50729%3A11297',
  },
}

export default CardStory
