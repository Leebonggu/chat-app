module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    'dynamic-import-node'
  ],
  env: {
    production: {
      plugins: [
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-constant-elements'
      ]
    }
  }
};
