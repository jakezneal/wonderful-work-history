import * as TextInput from './TextInput.stories';
// @ts-ignore
import { generateSuite, type VueWrapper } from '@netsells/vue-storybook-test-utils';
import { describe, beforeEach, test, expect } from 'vitest';

const suite = generateSuite(TextInput);

describe('TextInput', () => {
    let wrapper: VueWrapper;

    const textInput = () => wrapper.getComponent();
    const input = () => wrapper.findByTestId('input');
    const inputWrapper = () => wrapper.findComponent({ name: 'input-wrapper' });

    beforeEach(() => {
        wrapper = suite.textInput();
    });

    test('passes the `id` prop to the input', () => {
        expect(input().attributes('id')).toBe(textInput().props('id'));
    });

    test('passes the `id` prop to the `InputWrapper`', () => {
        expect(inputWrapper().props('id')).toBe(textInput().props('id'));
    });

    test('passes the `label` prop to the `InputWrapper`', () => {
        expect(inputWrapper().props('label')).toBe(textInput().props('label'));
    });

    // describe('when the `name` prop is provided', () => {
    //     beforeEach(() => {
    //         wrapper = suite.withName();
    //     });

    //     test('passes the `name` prop to the `InputWrapper`', () => {
    //         expect(inputWrapper().props('name')).toBe(textInput().props('name'));
    //     });
    // });

    // describe('when the `disabled` prop is provided', () => {
    //     beforeEach(() => {
    //         wrapper = suite.disabled();
    //     });

    //     test('passes the `disabled` prop to the `InputWrapper`', () => {
    //         expect(inputWrapper().props('disabled')).toBe(true);
    //     });
    // });

    describe('when the `placeholder` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.placeholder();
        });

        test('passes the `placeholder` prop to the input', () => {
            expect(input().attributes('placeholder')).toBe(textInput().props('placeholder'));
        });

        // test('passes the `placeholder` prop to the `InputWrapper`', () => {
        //     expect(inputWrapper().props('placeholder')).toBe(textInput().props('placeholder'));
        // });
    });

    // describe('when the `required` prop is provided', () => {
    //     beforeEach(() => {
    //         wrapper = suite.required();
    //     });

    //     test('passes the `required` prop to the input', () => {
    //         expect(input().attributes('required')).toBe(textInput().props('required'));
    //     });

    //     test('passes the `required` prop to the `InputWrapper`', () => {
    //         expect(inputWrapper().props('required')).toBe(textInput().props('required'));
    //     });
    // });

    describe('when the `value` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.withValue();
        });

        test('passes the `value` prop to the input', () => {
            expect(input().attributes('value')).toBe(textInput().props('value'));
        });
    });
});
