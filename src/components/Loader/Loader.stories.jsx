import React from 'react'
import Loader from './Loader'

const LoaderStory = {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
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
      <div className='w-10'>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Loader {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Loader'
Primary.args = {
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Jz0uTOkXSIBRd6OtnSTOvI/Material-3-Design-Kit-(Community)?node-id=49848%3A6285',
  },
}

export default LoaderStory
