module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'color-named': 'never',
    'selector-type-no-unknown': [
      true,
      {
        // ignoreTypes: ['page'],
      }
    ]
  }
}
