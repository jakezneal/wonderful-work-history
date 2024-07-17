#!/usr/bin/env node

import { defineCommand, runMain } from 'citty';
import { intro, log, outro } from '@clack/prompts';
import { resolve } from 'path';
import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { camelCase, kebabCase, pascalCase } from 'scule';

import componentTemplate from './templates/Component.vue.js';
import storiesTemplate from './templates/Component.stories.ts.js';
import testsTemplate from './templates/Component.spec.ts.js';

const main = defineCommand({
    meta: {
        name: 'CLI',
        version: '1.0.0',
        description: 'CLI tools for generating new components, with stories and unit test files',
    },

    args: {
        path: {
            type: 'positional',
            description: 'Component path i.e. ./components/MyComponent',
            required: false,
        },
    },

    async run({ args }) {
        const { path } = args;

        if (!path) {
            intro('make:component');

            log.error('Missing path argument');

            outro('');

            return;
        }

        const [componentName] = path.split('/').slice(-1);

        [
            {
                name: 'Component.vue',
                file: componentTemplate,
            },
            {
                name: 'Component.stories.ts',
                file: storiesTemplate,
            },
            {
                name: 'Component.spec.ts',
                file: testsTemplate,
            },
        ].forEach(async ({ name, file }) => {
            const filePath = resolve(path, name.replace('Component', componentName));
            const compiled = file({
                component: {
                    name: {
                        pascal: pascalCase(componentName),
                        kebab: kebabCase(componentName),
                        camel: camelCase(componentName),
                    },
                },
            });

            if (!existsSync(path)) {
                mkdirSync(path, {
                    recursive: true,
                });
            }

            writeFileSync(filePath, compiled, 'utf-8');
        });

        outro(`Component generated at ${path}/${componentName}`);
    },
});

runMain(main);
