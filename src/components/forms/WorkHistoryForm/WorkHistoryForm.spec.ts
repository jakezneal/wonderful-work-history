import * as WorkHistoryForm from './WorkHistoryForm.stories';
// @ts-ignore
import { generateSuite, type VueWrapper } from '@netsells/vue-storybook-test-utils';
import { describe, beforeEach, test, expect } from 'vitest';

const suite = generateSuite(WorkHistoryForm);

describe('WorkHistoryForm', () => {
    let wrapper: VueWrapper;

    const workHistoryForm = () => wrapper.getComponent();
    const jobTitle = () => wrapper.findComponentByTestId({ name: 'text-input' }, 'jobTitle');
    const companyName = () => wrapper.findComponentByTestId({ name: 'text-input' }, 'companyName');
    const startDate = () => wrapper.findComponentByTestId({ name: 'datetime-picker-input' }, 'startDate');
    const endDate = () => wrapper.findComponentByTestId({ name: 'datetime-picker-input' }, 'endDate');

    beforeEach(() => {
        wrapper = suite.workHistoryForm();
    });

    test.each([
        ['TextInput', 'job title', jobTitle],
        ['TextInput', 'company name', companyName],
        ['DatetimePickerInput', 'start date', startDate],
        ['DatetimePickerInput', 'end date', endDate],
    ])('renders a %s for the %s input', (componentName, testId, component) => {
        expect(component() && component().exists()).toBeTruthy();
    });
});
