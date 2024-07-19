/**
 * Stories for AccordionItem.
 *
 * @see https://storybook.js.org/docs/vue/essentials/controls
 */

import generateArgTypes from '@netsells/storybook-vue-generate-arg-types';
import AccordionItem, { type AccordionItemProps } from './AccordionItem.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<AccordionItemProps> = {
    /**
     * Set the component on the default export for props to be
     * automatically converted to args/controls.
     */
    component: AccordionItem,
    /**
     * Provide custom control types for your props.
     *
     * @see https://storybook.js.org/docs/vue/essentials/controls#annotation
     */
    argTypes: generateArgTypes(AccordionItem),
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
        name: 'accordion-item-story',

        props: args,

        components: { AccordionItem },

        setup() {
            return {
                args,
            };
        },

        template: `
            <accordion-item v-bind="args">
                <p data-testid="slotContent">Accordion slot content</p>
            </accordion-item>
        `,
    }),
};

type Story = StoryObj<typeof meta>;

export const accordionItem: Story = {
    name: 'AccordionItem',
};

export const withTitle: Story = {
    args: {
        title: 'Job title',
    },
};

export const withTitleAndCompany: Story = {
    args: {
        ...withTitle.args,
        company: 'Company name',
    },
};

export const withEndDate: Story = {
    args: {
        end: new Intl.DateTimeFormat('en-GB').format(new Date('Jul 18 2024')),
    },
};

export default meta;
