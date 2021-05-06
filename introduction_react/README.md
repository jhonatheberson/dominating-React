# Introdution React
  ## Configurando Estrutura:

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

  ## Criando componente raiz:

  precisamos criar um arquivo chamado **/src/App.js**
  com seguinte conteudo:

  ```
  import React from 'react';

  function App(){
    return <h1>Hello World</h1>
  }
  export default App;
  ```

  e vamos alterar o arquivo **/src/index.js** importando nosso primeiro componente.

  ```
  import React from 'react';
  import { render } from 'react-dom';

  import App from '../src/App';

  render(<App />, document.getElementById('app'));
  ```

  e por fim vamos chamar nosso componente no **index.html** usando a *div* dessa forma:

  ```
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React JS</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="../dist/main.js"></script>
  </body>
  </html>
  ```

  ## Importando CSS:

  vamos adicionar rules no arquivo **webpack.config.js** dessa forma:

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
  ```

  e vamos criar nosso arquivo CSS **/src/App.css** que ficou assim:

  ```
  body {
    background: #7159c1;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }
  ```

  e por fim para funcionar precisamos importar esse arquivo CSS dentro do **/src/App.js**

  assim:

  ```
  import React from 'react';
import './App.css';

function App(){
  return <h1>Hello World</h1>
}
export default App;
  ```