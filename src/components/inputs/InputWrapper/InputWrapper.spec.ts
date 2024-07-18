import * as InputWrapper from './InputWrapper.stories';
// @ts-ignore
import { generateSuite, type VueWrapper } from '@netsells/vue-storybook-test-utils';
import { describe, beforeEach, test, expect } from 'vitest';

const suite = generateSuite(InputWrapper);

describe('InputWrapper', () => {
    let wrapper: VueWrapper;

    const inputWrapper = () => wrapper.getComponent();
    const label = () => wrapper.findByTestId('label');
    const errorWrapper = () => wrapper.findByTestId('errorWrapper');
    const errors = () => wrapper.findAllByTestId('error');
    const asterisk = () => wrapper.findByTestId('asterisk');

    beforeEach(() => {
        wrapper = suite.inputWrapper();
    });

    test('renders the label', () => {
        expect(label().text()).toContain(inputWrapper().props('label'));
        expect(label().attributes('for')).toBe(inputWrapper().props('id'));
    });

    test('by default the disabled styles are not applied', () => {
        expect(inputWrapper().classes()).not.toContain('bg-gray-100');
    });

    test('by default the error styles are not applied', () => {
        expect(inputWrapper().classes()).not.toContain('border-red');
    });

    // describe('when the `error` prop is provided', () => {
    //     beforeEach(() => {
    //         wrapper = suite.error();
    //     });

    //     test.todo('renders the error');

    //     test.todo('the input is highlighted');

    //     describe('and there are multiple errors', () => {
    //         beforeEach(() => {
    //             wrapper = suite.errors();
    //         });

    //         test.todo('renders each error');
    //     });
    // });

    describe('when the `required` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.required();
        });

        test('renders the asterisk', () => {
            expect(asterisk().exists()).toBeTruthy();
        });
    });
});
