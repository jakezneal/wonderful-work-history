/**
 * Stories for AppButton.
 *
 * @see https://storybook.js.org/docs/vue/essentials/controls
 */

import generateArgTypes from '@netsells/storybook-vue-generate-arg-types';
import AppButton, { type AppButtonProps } from './AppButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<AppButtonProps> = {
    /**
     * Set the component on the default export for props to be
     * automatically converted to args/controls.
     */
    component: AppButton,
    /**
     * Provide custom control types for your props.
     *
     * @see https://storybook.js.org/docs/vue/essentials/controls#annotation
     */
    argTypes: generateArgTypes(AppButton),
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
        name: 'app-button-story',

        props: args,

        components: { AppButton },

        setup() {
            return {
                args,
            };
        },

        template: `
            <app-button
                v-bind="args"
            />
        `,
    }),
};

type Story = StoryObj<typeof meta>;

export const appButton: Story = {
    name: 'AppButton',
    args: {
        text: 'Add work history',
    },
};

export const primary: Story = {
    args: {
        text: 'Save',
        variant: 'primary',
    },
};

export const withIcon: Story = {
    args: {
        ...appButton.args,
        icon: '+',
    },
};

export default meta;
