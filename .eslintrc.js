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
    ],
};
