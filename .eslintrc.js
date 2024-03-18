module.exports = {
    env: {
        node: true,
    },
    parserOptions: {
        parser: {
            js: 'espree',
            jsx: 'espree',

            ts: '@typescript-eslint/parser',
            tsx: '@typescript-eslint/parser',
        },
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['vuejs-accessibility'],
    extends: [
        '@team23/eslint-config-team23-standard',
        '@team23/eslint-config-team23-ts',
        'plugin:vue/vue3-recommended',
        'plugin:vuejs-accessibility/recommended',
    ],
    overrides: [
        {
            files: [
                '*.vue',
            ],
            rules: {
                // eslint-disable-next-line no-magic-numbers
                'vue/html-indent': ['error', 4],
                /* Optional rules not provided by vue preset */
                'vue/block-lang': ['error', {
                    script: { lang: 'ts' },
                    i18n: { lang: 'yaml' },
                }],
                'vue/block-order': ['error', {
                    order: ['script[setup]', 'script', 'template', 'style', 'i18n'],
                }],
                'vue/block-tag-newline': 'error',
                'vue/component-api-style': 'error',
                'vue/component-name-in-template-casing': ['warn', 'kebab-case', {
                    registeredComponentsOnly: false,
                }],
                'vue/custom-event-name-casing': 'error',
                'vue/define-emits-declaration': ['error', 'type-literal'],
                'vue/define-macros-order': ['error', {
                    order: ['defineProps', 'defineEmits', 'defineModel', 'defineOptions', 'defineSlots'],
                }],
                'vue/define-props-declaration': 'error',
                'vue/enforce-style-attribute': 'error',
                'vue/html-comment-content-newline': 'error',
                'vue/html-comment-content-spacing': 'error',
                // eslint-disable-next-line no-magic-numbers
                'vue/html-comment-indent': ['error', 4],
                'vue/no-empty-component-block': 'error',
                'vue/no-multiple-objects-in-class': 'error',
                'vue/no-ref-object-reactivity-loss': 'warn',
                'vue/no-required-prop-with-default': 'error',
                'vue/no-root-v-if': 'warn',
                'vue/no-static-inline-styles': 'error',
                'vue/no-unused-emit-declarations': 'error',
                'vue/no-use-v-else-with-v-for': 'error',
                'vue/no-useless-mustaches': 'error',
                'vue/no-useless-v-bind': 'error',
                'vue/padding-line-between-blocks': 'error',
                'vue/prefer-separate-static-class': 'error',
                'vue/require-emit-validator': 'error',
                'vue/require-macro-variable-name': 'error',
                'vue/require-typed-ref': 'error',
                'vue/v-for-delimiter-style': 'error',
            },
        },
        {
            files: [
                '*.ts',
                '*.tsx',
                '*.vue',
            ],
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                // allow unused variables when they start with an underscore
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'after-used',
                        ignoreRestSiblings: true,
                        argsIgnorePattern: '^_',
                    },
                ],
            },
        },
        {
            files: [
                '*.spec.ts',
                '*.spec.tsx',
            ],
            rules: {
                '@typescript-eslint/no-magic-numbers': 'off',
                'max-lines': 'off',
            },
        },
        {
            files: [
                '*.spec.ts',
                '*.spec.tsx',
                '**/__mocks__/**/*.ts',
                '**/__mocks__/**/*.tsx',
            ],
            rules: {
                '@typescript-eslint/no-empty-function': 'off',
            },
        },
        {
            files: [
                'vite.config.ts',
                'vitest.config.ts',
            ],
            rules: {
                'import/no-default-export': 'off',
            },
        },
    ],
};
