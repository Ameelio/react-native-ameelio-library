module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'inline-dotenv',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@demo': './demo',
          '@dev': './dev',
          '@src': './src',
        },
      },
    ],
  ],
};
