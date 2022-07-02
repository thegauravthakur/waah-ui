import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {FancyButton} from '../components';

export default {
  title: 'Components/Button/Fancy Button',
  component: FancyButton,
} as ComponentMeta<typeof FancyButton>;

const Template: ComponentStory<typeof FancyButton> = (args) => <FancyButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: 'Fancy Button',
  href: '#',
};
