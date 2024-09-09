# eslint-config-team23-vue

A set of eslint rules used by TEAM23 for Vue 3 TypeScript projects.

## ⚠️ Important Notice: Migration to Monorepo ⚠️

**🚨 This package has been moved to a monorepo! 🚨**

As of 09.09.2024, the project has been migrated to a monorepo structure. You can now find the project at the following location:

**🔗 Monorepo Path:** https://github.com/team23/style-guide/tree/main/libs/vue

This move allows us to better manage shared code and collaborate efficiently. Please make sure to update your references to the new monorepo structure.

If you encounter any issues or have questions, please open an issue in the new monorepo repository.

## Installation in your project

Add the library to your `package.json` as `devDependency`

```bash
npm i --save-dev @team23/eslint-config-team23-vue
```

This repo already includes the [eslint-config-team23-standard](https://github.com/team23/eslint-config-team23-standard) package and the [eslint-config-team23-ts](https://github.com/team23/eslint-config-team23-ts) package. No need to install them separately.

### Required peer dependencies

    eslint: ^8.56.0,
    eslint-plugin-import: ^2.29.1,
    eslint-plugin-jsdoc: ^46.5.0,
    eslint-plugin-prefer-arrow: ^1.2.3,
    eslint-plugin-vuejs-accessibility: ^2.2.1
    @typescript-eslint/parser: ^6.20.0,
    @typescript-eslint/eslint-plugin: ^6.20.0

### Usage in your project

If you've enabled `eslint` locally within your project, just set your `.eslintrc.[json|js]` config to extend the rules from this repo:

#### Extend Globally

```js
{
    extends: '@team23/eslint-config-team23-vue'
}
```

### Extending the .eslintrc.js

Simply add a `'rules'` key to your config, then add your overrides and additions there.

```js
{
    extends: '@team23/eslint-config-team23-vue'
    rules: {
        'vue/order-in-components': 'off'
    }
}
```

### Additional configuration

- If your project relies on internationalization, you may want to add [vue/no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template) to your config.
- It may be helpful to enable [vue/require-prop-comment](https://eslint.vuejs.org/rules/require-prop-comment) to document component interfaces.

## Development

#### Rules that should be included here

 - vue rules

#### Rules that should NOT be included here

 - eslint rules
 - @typescript-eslint rules
 - rules from other frameworks (angular, react), libraries (nx), etc.

### Proposing rule changes

For proposing changes to the ruleset please open either

-   a merge request
-   reviewed and approved by at least one mid-senior level developer
-   additional permission is required if you would like to make a new version after the rule change

### Creating a new version after new rule changes

1) update [CHANGELOG.md](CHANGELOG.md)
2) Run `npm version [<newversion> | major | minor | patch] -m "feat(core): <versionmessage>"`
3) Push commits and tags
4) Run `npm publish --access public` to publish the new version to npm

### Usage inside of this project 

If you want a brief test of this repo, do the following:

- `npm ci`
- Run `npm run lint`

## [License](LICENSE)

TEAM23 GmbH
