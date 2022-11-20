import React from 'react';
import RadioGroup from './RadioGroup';


const RadioGroupStory = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    items: {
      defaultValue: [{ value: 'item-1', label: 'Item 1'}, {value: 'item-2', label: 'Item 2'}],
    },
    value: {
      defaultValue: 'item-1',
      options: ['item-1', 'item-2'],
      control: { type: 'select'} 
    }
  },
};

const Template = ({ items, value }) => (<>
    <RadioGroup items={items} value={value} />
    </>
)

export const Primary = Template.bind({})
Primary.storyName = 'RadioGroup'

export default RadioGroupStory
