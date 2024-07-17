import * as AppButton from './AppButton.stories';
// @ts-ignore
import { generateSuite, type VueWrapper } from '@netsells/vue-storybook-test-utils';
import { describe, beforeEach, test, expect } from 'vitest';

const suite = generateSuite(AppButton);

describe('AppButton', () => {
    let wrapper: VueWrapper;

    const appButton = () => wrapper.getComponent();
    const icon = () => wrapper.findByTestId('icon');

    beforeEach(() => {
        wrapper = suite.appButton();
    });

    test('renders the button text', () => {
        expect(appButton().text()).toContain('Add work history');
    });

    test('renders the base button styles', () => {
        expect(appButton().classes()).toContain('text-aqua');
        expect(appButton().classes()).not.toContain('bg-aqua');
    });

    describe('when the icon prop is defined', () => {
        beforeEach(() => {
            wrapper = suite.withIcon();
        });

        test('renders the icon', () => {
            expect(icon().exists()).toBeTruthy();
            expect(icon().text()).toBe('+');
        });
    });

    describe('when the variant is `primary`', () => {
        beforeEach(() => {
            wrapper = suite.primary();
        });

        test('renders the primary button styles', () => {
            expect(appButton().classes()).toContain('bg-aqua');
            expect(appButton().classes()).not.toContain('text-aqua');
        });
    });
});
