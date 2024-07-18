import * as DatetimePickerInput from './DatetimePickerInput.stories';
// @ts-ignore
import { generateSuite, type VueWrapper } from '@netsells/vue-storybook-test-utils';
import { describe, beforeEach, test, expect } from 'vitest';

const suite = generateSuite(DatetimePickerInput);

describe('DatetimePickerInput', () => {
    let wrapper: VueWrapper;

    const datetimePickerInput = () => wrapper.getComponent();
    const button = () => wrapper.findByTestId('button');
    const inputWrapper = () => wrapper.findComponent({ name: 'input-wrapper' });
    const datePicker = () => wrapper.findComponent({ name: 'date-picker' });
    const buttonText = () => wrapper.findByTestId('buttonText');

    beforeEach(() => {
        wrapper = suite.datetimePickerInput();
    });

    test('passes the `id` prop to the button', () => {
        expect(button().attributes('id')).toBe(datetimePickerInput().props('id'));
    });

    test('passes the `id` prop to the `InputWrapper`', () => {
        expect(inputWrapper().props('id')).toBe(datetimePickerInput().props('id'));
    });

    test('passes the `label` prop to the `InputWrapper`', () => {
        expect(inputWrapper().props('label')).toBe(datetimePickerInput().props('label'));
    });

    describe('when the `name` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.withName();
        });

        test('passes the `name` prop to the button', () => {
            expect(button().attributes('name')).toBe(datetimePickerInput().props('name'));
        });
    });

    // describe('when the `disabled` prop is provided', () => {
    //     beforeEach(() => {
    //         wrapper = suite.disabled();
    //     });

    //     test('passes the `disabled` prop to the button', () => {
    //         expect(button().attributes('disabled')).toBe(true);
    //     });
    // });

    describe('when the `placeholder` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.placeholder();
        });

        test('renders the placeholder', () => {
            expect(buttonText().exists()).toBeTruthy();
            expect(buttonText().text()).toContain(datetimePickerInput().props('placeholder'));
        });
    });

    describe('when the `value` prop is provided', () => {
        beforeEach(() => {
            wrapper = suite.withValue();
        });

        test('renders the value', () => {
            expect(button().text()).toContain(datetimePickerInput().props('value'));
        });
    });
});
