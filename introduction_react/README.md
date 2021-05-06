# Introdution React
  - Configurando Estrutura:

    nesse topico vamos criar a estrutura padrão de um projeto react

  ```
    //inicializa package.json
    yarn init -y

    //instala ferramentas que vou utilizar como dependencia de desenvolvimento
    yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D

    //instala react e dom do react
    yarn add react react-dom
  ```

  agora vamos configurar o babel para isso iremos criar um arquivo chamado **babel.config.js**

  o conteduo desse arquivo ficou dessa forma:

  ```
  module.exports = {
    presets: [
      "@babel/preset-env", //transforma novas funcionalidades do javascript que o navegador ainda não entende como import, export, classes
      "@babel/preset-react" //transforma o que o navegador não entende do react, como js
    ],
  }
  ```

agora iremos criar a configuração do webpack, para isso vamos criar uma arquivo chamado **webpack.config.js**

com o seguinte conteudo:

  ```
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
      },
    ],
  },
};
  ```

  também é necessario instalar o babel-loader como dependencia de desenvolvimemto e webpack-dev-server para não precisar ficar recompilando enquanto desenvolve

  ```
  yarn add babel-loader -D

  yarn add webpack-dev-server -D
  ```

  logo nossa estrutura está dessa forma:

  - ./
      - /src
        - index.js
      - /public
        - index.html
      - /dist
        - main.js
      - babel.config.js
      - webpack.config.js
      - package.json
      - yarn.lock
      - README.md

também modificamos nossos arquivo **package.json** e colocando script:

```
{
  "name": "introduction_react",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack server --mode development"
  },
  "devDependencies": {
    "@babel/core": "^7.14.0",
    "@babel/preset-env": "^7.14.1",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^8.2.2",
    "webpack": "^5.36.2",
    "webpack-cli": "^4.7.0",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}

```