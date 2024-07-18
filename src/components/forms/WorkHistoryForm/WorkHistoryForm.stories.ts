/**
 * Stories for WorkHistoryForm.
 *
 * @see https://storybook.js.org/docs/vue/essentials/controls
 */

import generateArgTypes from '@netsells/storybook-vue-generate-arg-types';
import WorkHistoryForm, { type WorkHistoryFormProps } from './WorkHistoryForm.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<WorkHistoryFormProps> = {
    /**
     * Set the component on the default export for props to be
     * automatically converted to args/controls.
     */
    component: WorkHistoryForm,
    /**
     * Provide custom control types for your props.
     *
     * @see https://storybook.js.org/docs/vue/essentials/controls#annotation
     */
    argTypes: generateArgTypes(WorkHistoryForm),
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
        name: 'work-history-form-story',

        props: args,

        components: { WorkHistoryForm },

        setup() {
            return {
                args,
            };
        },

        template: `
            <work-history-form
                v-bind="args"
            />
        `,
    }),
};

type Story = StoryObj<typeof meta>;

export const workHistoryForm: Story = {
    name: 'WorkHistoryForm',
};
    
export default meta;
