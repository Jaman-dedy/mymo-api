module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": [0],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/prefer-default-export": ["off"],
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
