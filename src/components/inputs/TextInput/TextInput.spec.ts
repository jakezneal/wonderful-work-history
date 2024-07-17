import * as TextInput from './TextInput.stories';
// @ts-ignore
import { generateSuite, type VueWrapper } from '@netsells/vue-storybook-test-utils';
import { describe, beforeEach, test, expect } from 'vitest';

const suite = generateSuite(TextInput);

describe('TextInput', () => {
    let wrapper: VueWrapper;

    const textInput = () => wrapper.getComponent();
    const label = () => wrapper.findByTestId('label');
    const input = () => wrapper.findByTestId('input');
    const errorWrapper = () => wrapper.findByTestId('errorWrapper');
    const errors = () => wrapper.findAllByTestId('error');
    const asterisk = () => wrapper.findByTestId('asterisk');

    beforeEach(() => {
        wrapper = suite.textInput();
    });

    test('passes the `id` prop to the input', () => {
        expect(input().attributes('id')).toBe('text-input');
    });

    test('renders the label', () => {
        expect(label().text()).toContain('Text input');
    });

    test('by default the disabled styles are not applied', () => {
        expect(textInput().classes()).not.toContain('bg-gray-100');
    });

    test('by default the error styles are not applied', () => {
        expect(textInput().classes()).not.toContain('border-red');
    });

    describe('when the `name` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.withName();
        });

        test('passes the `name` prop to the input', () => {
            expect(input().attributes('name')).toBe('text-input');
        });
    });

    describe('when the `error` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.error();
        });

        test.todo('renders the error');

        test.todo('the input is highlighted');

        describe('and there are multiple errors', () => {
            beforeEach(() => {
                wrapper = suite.errors();
            });

            test.todo('renders each error');
        });
    });

    describe('when the `disabled` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.disabled();
        });

        test.todo('passes the `disabled` prop to the input');

        test.todo('the input appears disabled');
    });

    describe('when the `placeholder` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.placeholder();
        });

        test('passes the `placeholder` prop to the input', () => {
            expect(input().attributes('placeholder')).toBe('Input placeholder');
        });
    });

    describe('when the `required` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.required();
        });

        test.todo('passes the `required` prop to the input');

        test('renders the asterisk', () => {
            expect(asterisk().exists()).toBeTruthy();
        });
    });

    describe('when the `value` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.withValue();
        });

        test('passes the `value` prop to the input', () => {
            expect(input().attributes('value')).toBe('Some value');
        });
    });
});
