require('@rushstack/eslint-patch/modern-module-resolution');

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
    extends: [
        '@team23/eslint-config-team23-standard',
        '@team23/eslint-config-team23-ts',
        'plugin:vue/vue3-recommended',
    ],
    overrides: [
        {
            files: [
                '*.vue',
            ],
            rules: {
                'import/no-default-export': 'off',
                'prefer-arrow/prefer-arrow-functions': 'off',
            },
        },
        {
            files: ['*.ts', '*.tsx', '*.vue'],
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                '@typescript-eslint/no-unused-vars': 'warn',
            },
        },
    ],
};
