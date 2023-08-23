# eslint-config-team23-vue

A set of eslint rules used by TEAM23 for Vue 3 TypeScript projects.

## Installation in your project
Add the library to your `package.json` as `devDependency`

```bash
npm i --save-dev @team23/eslint-config-team23-vue
```

### Required peer dependencies
    eslint: ^8.47.0
    typescript: ^4.0.0

### Usage in your project

If you've enabled `eslint` locally within your project, just set your `.eslintrc.[json|js]` config to extend the rules from this repo:

#### Extend Globally
```js
{
    extends: '@team23/eslint-config-team23-vue'
}
```

#### Extend overrides
```js
{
    overrides: [
        {
            files: [
                '*.vue',
            ],
            extends: [
                '@team23/eslint-config-team23-vue'
            ],
            rules: {}
        }
    ]
}
```

### Extending the .eslintrc.json

Simply add a `'rules'` key to your config, then add your overrides and additions there.

```js
{
    extends: '@team23/eslint-config-team23-vue'
    rules: {
        'vue/order-in-components': 'off'
    }
}
```

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