import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components';

export default {
    title: 'Components/Button/Fancy Button',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Button = Template.bind({});
Button.args = {
    value: 'Default value',
};
