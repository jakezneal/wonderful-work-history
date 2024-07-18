/**
 * Stories for InputWrapper.
 *
 * @see https://storybook.js.org/docs/vue/essentials/controls
 */

import generateArgTypes from '@netsells/storybook-vue-generate-arg-types';
import InputWrapper, { type InputWrapperProps } from './InputWrapper.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<InputWrapperProps> = {
    /**
     * Set the component on the default export for props to be
     * automatically converted to args/controls.
     */
    component: InputWrapper,
    /**
     * Provide custom control types for your props.
     *
     * @see https://storybook.js.org/docs/vue/essentials/controls#annotation
     */
    argTypes: generateArgTypes(InputWrapper),
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
        name: 'input-wrapper-story',

        props: args,

        components: { InputWrapper },

        setup() {
            return {
                args,
            };
        },

        template: `
            <input-wrapper v-bind="args">
                <input type="text" :id="args.id" style="border: 1px solid #000000" />
            </input-wrapper>
        `,
    }),
};

type Story = StoryObj<typeof meta>;

export const inputWrapper: Story = {
    name: 'InputWrapper',
    args: {
        id: 'text-input',
        label: 'Text input',
    },
};

export const error: Story = {
    args: {
        ...inputWrapper.args,
        errors: ['This field is required'],
    },
};

export const errors: Story = {
    args: {
        ...inputWrapper.args,
        errors: ['This field is required', 'Input is not valid'],
    },
};

export const required: Story = {
    args: {
        ...inputWrapper.args,
        required: true,
    },
};

export default meta;
