export default (value) => `import * as ${value.component.name.pascal} from './${value.component.name.pascal}.stories';
// @ts-ignore
import { generateSuite, type VueWrapper } from '@netsells/vue-storybook-test-utils';
import { describe, beforeEach, test, expect } from 'vitest';

const suite = generateSuite(${value.component.name.pascal});

describe('${value.component.name.pascal}', () => {
    let wrapper: VueWrapper;

    const ${value.component.name.camel} = () => wrapper.getComponent();
    
    beforeEach(() => {
        wrapper = suite.${value.component.name.camel}();
    });
});

`;
