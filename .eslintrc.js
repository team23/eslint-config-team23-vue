module.exports = {
    env: {
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    overrides: [
        {
            files: [
                '*.ts',
                '*.tsx',
                '*.js',
                '*.jsx',
                '*.vue',
            ],
            extends: [
                '@team23/eslint-config-team23-standard',
            ],
            rules: {},
        },
        {
            files: [
                '*.ts',
                '*.tsx',
                '*.vue',
            ],
            extends: [
                '@team23/eslint-config-team23-ts',
            ],
            rules: {},
        },
        {
            files: [
                '*.vue',
            ],
            extends: [
                'plugin:vue/vue3-recommended',
            ],
            rules: {
                'import/no-default-export': 'off',
                'prefer-arrow/prefer-arrow-functions': 'off',
            },
        },
        {
            files: ['*.ts', '*.tsx', '*.vue'],
            rules: {
                // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
                // does not work with type definitions
                'no-unused-vars': 'off',
                // TS already checks for that, and Typescript-Eslint recommends to disable it
                // eslint-disable-next-line max-len
                // https://typescript-eslint.io/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
                'no-undef': 'off',
                '@typescript-eslint/no-unused-vars': 'warn',
            },
        },
    ],
};
