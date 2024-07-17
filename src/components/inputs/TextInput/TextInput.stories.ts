/**
 * Stories for TextInput.
 *
 * @see https://storybook.js.org/docs/vue/essentials/controls
 */

import generateArgTypes from '@netsells/storybook-vue-generate-arg-types';
import TextInput, { type TextInputProps } from './TextInput.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<TextInputProps> = {
    /**
     * Set the component on the default export for props to be
     * automatically converted to args/controls.
     */
    component: TextInput,
    /**
     * Provide custom control types for your props.
     *
     * @see https://storybook.js.org/docs/vue/essentials/controls#annotation
     */
    argTypes: generateArgTypes(TextInput),
    /**
     * Set any default props data on your component.
     *
     * @see https://storybook.js.org/docs/8.0/vue/writing-stories/args
     */
    args: {},
    /**
     * Set any default parameters on your stories.
     *
     * @see https://storybook.js.org/docs/8.0/vue/writing-stories/parameters
     */
    parameters: {
        container: true,
        layout: 'centered',
    },
    /**
     * Return your rendered component.
     *
     * @see https://storybook.js.org/docs/8.0/vue/api/csf
     */
    render: (args) => ({
        name: 'text-input-story',

        props: args,

        components: { TextInput },

        setup() {
            return {
                args,
            };
        },

        template: `
            <text-input
                v-bind="args"
            />
        `,
    }),
};

type Story = StoryObj<typeof meta>;

export const textInput: Story = {
    name: 'TextInput',
    args: {
        id: 'text-input',
        label: 'Text input',
    },
};

export const withValue: Story = {
    args: {
        ...textInput.args,
        value: 'Some value',
    },
};

export const withName: Story = {
    args: {
        ...textInput.args,
        name: 'text-input',
    },
};

export const placeholder: Story = {
    args: {
        ...textInput.args,
        placeholder: 'Input placeholder',
    },
};

export const disabled: Story = {
    args: {
        ...textInput.args,
        disabled: true,
    },
};

export const error: Story = {
    args: {
        ...textInput.args,
        errors: ['This field is required'],
    },
};

export const errors: Story = {
    args: {
        ...textInput.args,
        errors: ['This field is required', 'Input is not valid'],
    },
};

export const required: Story = {
    args: {
        ...textInput.args,
        required: true,
    },
};

export default meta;
