module.exports = {
    extends: "airbnb-typescript-prettier",
    ignorePatterns: ["**/*.d.ts", "**/*.js"],
    rules: {
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
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                "accessibility": "explicit",
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
};
