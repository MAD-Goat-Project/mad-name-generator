module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
