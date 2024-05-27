module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  plugins: ['vue', 'import'],
  rules: {
    'vue/no-multiple-template-root': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: true,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
  globals: {
    kakao: false,
  },
};
