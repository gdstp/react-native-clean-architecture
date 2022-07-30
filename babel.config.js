module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-transform-typescript-metadata',
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          alias: {
            '@domain': './src/domain',
            '@data': './src/data',
            '@presentation': './src/presentation',
          },
        },
      ],
    ],
  };
};
