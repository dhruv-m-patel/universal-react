module.exports = function (config) {
  const plugins = [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/syntax-optional-chaining',
    '@babel/transform-react-inline-elements',
    '@babel/syntax-dynamic-import',
    'babel-plugin-macros',
  ];

  if (!config.env('webpack')) {
    plugins.push('babel-plugin-css-modules-transform');
  }

  return {
    plugins,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: { node: 'current' },
          exclude: ['transform-regenerator', 'proposal-dynamic-import'],
        },
      ],
      '@babel/preset-react',
    ],
  };
};
