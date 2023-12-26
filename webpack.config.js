const path = require('path');
const { UserscriptPlugin } = require('webpack-userscript');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new UserscriptPlugin({
      headers: {
        name: 'ts-userscript',
        description: 'An userscript project written in TypeScript',
        version: '0.0.1',
        match: ["example.com"]
      },
      pretty: true,
      strict: true,
      whitelist: true,
      i18n: {
        en: {
          name: 'test',
          description: 'i18n'
        }
      }
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.userscript.js',
    path: path.resolve(__dirname, 'dist'),
  },
};