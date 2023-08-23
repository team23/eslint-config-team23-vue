module.exports = {
    env: {
        node: true,
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
                '@vue/eslint-config-typescript',
            ],
            rules: {
                'import/no-default-export': 'off',
                'prefer-arrow/prefer-arrow-functions': 'off',
            },
        },
    ],
};
