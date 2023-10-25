# ESLint Config
Preconfigured ESLint rules and Prettier formatting for plug and play usage in projects.

For NX projects simply copy over the rules for now.

## How to use
* Install @schablone/eslint-config with: `yarn add @schablone/eslint-config`
* Install the required peer dependencies if not present: `yarn add eslint prettier -D`
* Use it within your .eslintrc:
    ```json
    {
        "extends": "@schablone/eslint-config"
    }
    ```

## New release
Please note, that any change to the linting rules that produces an error and not just a warning
needs to be major release, because it will break dependent code.

## Custom rules
These are all the rules which differ from the AirBnB config or the default Prettier settings:

### ES Lint
* `arrow-body-style`: Turned off, because we want to keep the option to be explicit
* `import/prefer-default-export`: Default imports are not preferred
* `import/extensions`: Turned off, because it is not necessary with Typescript
* `no-await-in-loop`: It is more common to have dependent calls in a loop than parallelizable calls
* `no-cond-assign`: Turned off to allow assigning in while loops
* `no-restricted-imports`: Make sure all Material UI components are imported directly from core
* `no-restricted-syntax`: `for (of)` considered fast enough for our use cases, beware `for (in)` and check object property yourself
* `no-return-await`: Debugging is improved with return await at the cost of an extra microtask
* `no-useless-constructor`: Empty constructor required by some redux implementations
* `sort-imports`: Members in a multiple member import declaration should be sorted alphabetically

### React
* `react/function-component-definition`: Set to warn if not an arrow-function
* `react/require-default-props`: Turned off, because it will be deprecated in upcoming React versions anyway (use default parameters instead)


### Typescript
* `@typescript-eslint/no-unused-vars`: Only produce warnings for unused variables
* `@typescript-eslint/explicit-module-boundary-types`: Not necessary because IntelliSense catches this in a sufficient fashion
* `@typescript-eslint/explicit-member-accessibility`: Require explicit accessibility declaration of all class members

### Prettier
* `printWidth`: Print width is set to 120, instead of 80 for better readability
* `semi`: Semicolons are required
* `singleQuote`: Single quotes are used instead of double quotes in normal code

## Further reading
* List of all [ESLint rules](https://eslint.org/docs/rules/)
* [AirBnB Javascript styleguide](https://github.com/airbnb/javascript) with reasoning and explanations for rules
* [Prettier options](https://prettier.io/docs/en/options.html)
