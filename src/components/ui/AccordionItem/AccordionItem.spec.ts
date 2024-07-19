import * as AccordionItem from './AccordionItem.stories';
// @ts-ignore
import { generateSuite, type VueWrapper } from '@netsells/vue-storybook-test-utils';
import { describe, beforeEach, test, expect } from 'vitest';

const suite = generateSuite(AccordionItem);

const waitFor = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));

describe('AccordionItem', () => {
    let wrapper: VueWrapper;

    const accordionItem = () => wrapper.getComponent();
    const expandSvg = () => wrapper.findByTestId('expandSvg');
    const expandedSvg = () => wrapper.findByTestId('expandedSvg');
    const title = () => wrapper.findByTestId('title');
    const dates = () => wrapper.findByTestId('dates');
    const button = () => wrapper.findByTestId('button');
    const panel = () => wrapper.findByTestId('panel');

    beforeEach(() => {
        wrapper = suite.accordionItem();
    });

    test('renders the expand svg icon', () => {
        expect(expandSvg().exists()).toBeTruthy();
        expect(expandedSvg().exists()).toBeFalsy();
    });

    describe('when the `title` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.withTitle();
        });

        test('renders the title', () => {
            expect(title().text()).toContain(accordionItem().props('title'));
        });
    });

    describe('when the `company` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.withTitleAndCompany();
        });

        test('renders the company', () => {
            expect(title().text()).toContain(accordionItem().props('company'));
        });
    });

    describe('when the `end` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.withEndDate();
        });

        test('renders the end date', () => {
            expect(dates().text()).toContain(accordionItem().props('end'));
        });
    });

    describe('when the accordion is expanded', () => {
        beforeEach(async () => {
            await waitFor(100);
            await button().trigger('click');
        });

        test('the `aria-expanded` attribute is true', () => {
            expect(button().attributes('aria-expanded')).toBe('true');
        });

        test('the panel is visible', () => {
            expect(panel().exists()).toBeTruthy();
        });

        test('renders the expanded svg icon', () => {
            expect(expandedSvg().exists()).toBeTruthy();
            expect(expandSvg().exists()).toBeFalsy();
        });

        describe('when the button is clicked again', () => {
            beforeEach(async () => {
                await button().trigger('click');
            });

            test('the `aria-expanded` attribute is false', () => {
                expect(button().attributes('aria-expanded')).toBe('false');
            });
        });
    });
});
