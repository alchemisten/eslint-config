#How to use
Install @alchemisten/eslint-config-alchem with<br>
<code>npm install @alchemisten/eslint-config-alchem</code><br>
or<br>
<code>yarn add @alchemisten/eslint-config-alchem</code>

Use it within your .eslintrc:
<code>
    {
"extends": "@alchemisten/eslint-config-alchem"
    }
</code>

## Custom rules
Listed here are all the rules which differ from the AirBnB config or the default Prettier settings:

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
