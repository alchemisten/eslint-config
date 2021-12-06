module.exports = {
    plugins: ["import"],
    extends: "airbnb-typescript-prettier",
    ignorePatterns: ["**/*.d.ts", "**/*.js"],
    rules: {
        "import/prefer-default-export": "off",
        "no-await-in-loop": "off",
        "no-cond-assign": "off",
        "no-console": "off",
        "no-restricted-imports": [
            "error",
            {
                "patterns": [
                    "@material-ui/core/*/*",
                    "!@material-ui/core/styles",
                    "@mui/core/*/*",
                    "!@mui/core/styles"
                ]
            }
        ],
        "no-restricted-syntax": "off",
        "no-return-await": "off",
        "no-useless-constructor": "off",
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
