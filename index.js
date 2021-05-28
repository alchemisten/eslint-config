module.exports = {
    globals: {
        MyGlobal: true
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    root: true,
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-unused-vars": "error"
    },
    ignorePatterns: ["**/*.d.ts", "**/*.js"]
};