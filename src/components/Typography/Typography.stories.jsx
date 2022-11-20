import React from 'react'
import Typography from './Typography'

const TypographyStory = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    type: {
      options: ['display', 'title', 'body', 'label'],
      defaultValue: 'body',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body' },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    children: {
      control: 'text', defaultValue: 'Lorem Ipsum'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `- [M3 Docs](https://m3.material.io/styles/typography/type-scale-tokens)`
      }
    }
  }
}

const Template = ({ type, size, children }) => <Typography type={type} size={size}>{children}</Typography>

export const Primary = Template.bind({})
Primary.storyName = 'Typography'
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Jz0uTOkXSIBRd6OtnSTOvI/Material-3-Design-Kit-(Community)?node-id=49848%3A6285',
  },
}

export default TypographyStory
