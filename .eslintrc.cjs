module.exports = {
  extends: ['birbcore/react', 'mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
