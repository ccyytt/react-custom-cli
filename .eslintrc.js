module.exports = {
  extends: ['react-app', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    'import/no-anonymous-default-export': 'off',
    'eqeqeq': 'off',
    'react-hooks/exhaustive-deps': 'off',
    "jsx-a11y/anchor-is-valid":"off"
  },
};
