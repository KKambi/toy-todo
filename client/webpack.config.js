const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  //산출물이 위치할 경로
    filename: 'main.js'
  },
  rules: [
    {
      test: /\.sass$/,
      use: [
        // Compiles Sass to CSS
        'sass-loader'
      ],
    },
  ],
};