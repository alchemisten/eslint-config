module.exports = {
    plugins: [
        "react",
        "jsx-a11y",
        "import",
        "prettier",
        "@typescript-eslint"
    ],
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    ignorePatterns: ["**/*.d.ts", "**/*.js"],
    rules: {
        "arrow-body-style": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                mjs: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "import/prefer-default-export": "off",
        "no-await-in-loop": "off",
        "no-cond-assign": "off",
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
        "react/function-component-definition": [
            "warn",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                accessibility: "explicit",
            },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "prettier/prettier": [
            "warn",
            {
                printWidth: 120,
                semi: true,
                singleQuote: true
            },
        ],
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
            },
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    parserOptions: {
        project: "./tsconfig.json",
    }
};
