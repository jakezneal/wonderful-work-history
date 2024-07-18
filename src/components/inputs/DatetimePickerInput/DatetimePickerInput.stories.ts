/**
 * Stories for DatetimePickerInput.
 *
 * @see https://storybook.js.org/docs/vue/essentials/controls
 */

import generateArgTypes from '@netsells/storybook-vue-generate-arg-types';
import DatetimePickerInput, { type DatetimePickerInputProps } from './DatetimePickerInput.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<DatetimePickerInputProps> = {
    /**
     * Set the component on the default export for props to be
     * automatically converted to args/controls.
     */
    component: DatetimePickerInput,
    /**
     * Provide custom control types for your props.
     *
     * @see https://storybook.js.org/docs/vue/essentials/controls#annotation
     */
    argTypes: generateArgTypes(DatetimePickerInput),
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
        name: 'datetime-picker-input-story',

        props: args,

        components: { DatetimePickerInput },

        setup() {
            return {
                args,
            };
        },

        template: `
            <datetime-picker-input
                v-bind="args"
            />
        `,
    }),
};

type Story = StoryObj<typeof meta>;

export const datetimePickerInput: Story = {
    name: 'DatetimePickerInput',
    args: {
        id: 'datetime-picker-input',
        label: 'Datetime picker input',
    },
};

export const withValue: Story = {
    args: {
        ...datetimePickerInput.args,
        value: 'Some value',
    },
};

export const visible: Story = {
    args: {
        ...datetimePickerInput.args,
        showCalendar: true,
    },
};

export const withName: Story = {
    args: {
        ...datetimePickerInput.args,
        name: 'text-input',
    },
};

export const placeholder: Story = {
    args: {
        ...datetimePickerInput.args,
        placeholder: 'Input placeholder',
    },
};

export const disabled: Story = {
    args: {
        ...datetimePickerInput.args,
        disabled: true,
    },
};

export const error: Story = {
    args: {
        ...datetimePickerInput.args,
        errors: ['This field is required'],
    },
};

export const errors: Story = {
    args: {
        ...datetimePickerInput.args,
        errors: ['This field is required', 'Input is not valid'],
    },
};

export const required: Story = {
    args: {
        ...datetimePickerInput.args,
        required: true,
    },
};

export default meta;
