const path = require('path');

module.export = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.css$/,
        use: [
          {loader : 'style-loader'}, //importar arquivo css para dentro do aquivo html com tag <style>
          {loader : 'css-loader'}, //entendar importação de dentro de um arquivo css
        ]
      }
    ],
  },
};