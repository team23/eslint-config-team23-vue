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
                'import/no-default-export': 'off',
                'prefer-arrow/prefer-arrow-functions': 'off',
                // eslint-disable-next-line no-magic-numbers
                'vue/html-indent': ['error', 4],
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
