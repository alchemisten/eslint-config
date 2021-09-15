module.exports = {
    plugins: ["import"],
    extends: "airbnb-typescript-prettier",
    ignorePatterns: ["**/*.d.ts", "**/*.js"],
    rules: {
        "no-return-await": "off",
        "no-await-in-loop": "off",
        "no-useless-constructor": "off",
        "no-restricted-syntax": "off",
        "no-cond-assign": "off",
        "consistent-return": "off",
        "import/prefer-default-export": "off",
        "sort-imports": [
            "warn",
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
            },
        ],
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                accessibility: "explicit",
            },
        ],
        "prettier/prettier": [
            "warn",
            {
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
            },
        ],
    },
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true
            }
        }
    }
};
