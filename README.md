# ALCHEMISTEN ESLint Config
Preconfigured ESLint rules and Prettier formatting for plug and play usage in projects. 

##How to use
* Install @alchemisten/eslint-config with: `yarn add @alchemisten/eslint-config`
* Install the required peer dependencies if not present: `yarn add eslint prettier eslint-config-airbnb-typescript-prettier -D`
* Use it within your .eslintrc:
    ```json
    {
        "extends": "@alchemisten/eslint-config"
    }
    ```

## Custom rules
These are all the rules which differ from the AirBnB config or the default Prettier settings:

### ES Lint
* `import/prefer-default-export`: Default imports are not preferred
* `sort-imports`: Members in a multiple member import declaration should be sorted alphabetically

### Typescript
* `@typescript-eslint/no-unused-vars`: Only produce warnings for unused variables
* `@typescript-eslint/explicit-member-accessibility`: Require explicit accessibility declaration of all class members

### Prettier
* `printWidth`: Print width is set to 120, instead of 80 for better readability
* `semi`: Semicolons are required
* `singleQuote`: Single quotes are used instead of double quotes in normal code
* `tabWidth`: Tab width is set to 4 spaces instead of 2

## Further reading
* List of all [ESLint rules](https://eslint.org/docs/rules/)
* [AirBnB Javascript styleguide](https://github.com/airbnb/javascript) with reasoning and explanations for rules
* [Prettier options](https://prettier.io/docs/en/options.html)
