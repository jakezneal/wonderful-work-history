describe('WorkForm', () => {
    before((browser) => {
        browser.init();
    });

    const jobTitleInput = "[data-e2e='job-title'] > div > input[type='text']";
    const companyNameInput = "[data-e2e='company-name'] > div > input[type='text']";
    const startDateButton = "[data-e2e='start-date'] > div > button";
    const startDay =
        "[data-e2e='start-date'] > div > [data-e2e='date-picker'] > div > .vc-pane-layout > div > .vc-weeks > .vc-week > .vc-day.day-1";
    const submitButton = "[data-e2e='submitButton']";
    const workItem = "[data-e2e='workItem']";
    const firstWorkItemRemoveButton = "[data-e2e='workItem'] > div > [data-e2e='removeButton']";

    test('form submission works', () => {
        browser
            .setValue(jobTitleInput, 'Test Job')
            .setValue(companyNameInput, 'Test Company')
            .click(startDateButton)
            .click(startDay)
            .assert.not.hasAttribute(submitButton, 'disabled')
            .click(submitButton)
            .assert.elementsCount(workItem, 1);
    });

    test('item removal works', () => {
        browser.click(firstWorkItemRemoveButton).assert.not.elementPresent(workItem);
    });

    after((browser) => browser.end());
});
