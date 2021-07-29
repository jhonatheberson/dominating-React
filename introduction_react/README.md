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

  ## Importando imagens:

  para isso precisamos instalar a depencian que possibilidade isso:

  ```
  yarn add file-loader -D
  ```

  e vamos adiconar nova rule no aruqivo **/webpack.config.js** assim:

  ```
  {
    test: /.*\.(gif|png|jpe?g)$/i,
    use:{
      loader: 'file-loader'
    }
  }
  ```

  agora vamos importar no arquivo **/src/App.js**

  ```
  import React from 'react';

  import profile from './assets/profile.png'

  function App(){
    return <h1>Hello World</h1>
    return <img width="200" src={profile} />;
  }
  export default App;
  ```

  ## Class Components:

  Vamos criar uma pasta **/src/components**

  criando uma arquivo **TechList.js** dentro da pasta components:

  ```
  import React, { Component } from 'react'


  class TechList extends Component{
    render(){
      return (
        <ul>
          <li> Node.js</li>
          <li>React.JS</li>
          <li>React Native</li>
        </ul>
      )
    }
  }
  ```

  agora vamos importar nosso componente dentro de **App.js**

  ```
  import React from 'react';

  // import profile from './assets/profile.png'

  import TechList from './components/TechList'

  function App(){
    return <TechList />
    // return <h1>Hello World</h1>
    // return <img width="200" src={profile} />;
  }
  export default App;
  ```

  agora vamos instalar um plugins que fez que não precise fazer um constructor para informar o *state*

  ```
    yarn add @babel/plugin-proposal-class-properties -D
  ```
agora no arquivo **./babel.config.js** vamos adicionar esse plugin:

```
module.exports = {
  presets: [
    "@babel/preset-env", //transforma novas funcionalidades do javascript que o navegador ainda não entende como import, export, classes
    "@babel/preset-react" //transforma o que o navegador não entende do react, como js
  ],
  plugins : [
    '@babel/plugin-proposal-class-properties'
  ]
};
```

agora vamos adiconar o *state* ao componente **TechList.js**

```
import React, { Component } from 'react'


class TechList extends Component{
  state = {
    techs : [
        'Node.js',
        'React.JS',
        'React Native'
    ]
  };

  render(){
    return (
      <ul>
        <li> Node.js</li>
        <li>React.JS</li>
        <li>React Native</li>
      </ul>
    )
  }
}
```


  ## Estado e imutabilidade:

  - fragment **<> </>**
  - **onChange** fica pegando as alterações do texto
  - a variaveis state é imutavel, para mudar um stado fazemos **setState**
  - o render é executado sempre que os estados for mudado

  ```
  import { isThisSecond } from 'date-fns';
  import React, { Component } from 'react'


  class TechList extends Component{
    state = {
      newTech: '',
      techs : [
          'Node.js',
          'React.JS',
          'React Native'
      ]
    };

    handleInputChange = e => {
      console.log(e.target.valeu)
      this.setState({ newTech : e.target.valeu });
    }

    handleSubmit = e => {
      e.preventDefault(); //isso faz que a pagina não seja carregada ao clicar no button, que é default do web

      // this.state.techs.push(e) //isso não funciona porque é imutavel o state
      this.setState({techs: [...this.state.techs, this.state.newTech]}) // estou copiando tudo e adiconado mais um
      // para mudar o estado, precisamos usar SetState, que cria um novo array, e não altera
      //ṕara alterar preciso copiar tudo que estava antes e adicionar ou excluir o que quero
    }

    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.newTech}</h1>
          <ul>
            {this.state.techs.map((tech) => (
              <li key={tech}>{tech}</li> //key é para especificar e dizer ao react qual variavel estou mudando, ou referenciando
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange} // onChange faz que tudo que seja mudado no input, fique chamando o metodo handleInputChange
            valeu={this.state.newTech} // isso é uma boa pratico, informando qual o dado que irei mudar
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  }
  ```

  ## Removendo itens do estado:

  aqui criamos o função HandleDelete para deletar, usamos o **filter** para criar um novo array menos com elemento que queremos usar.

  ```
  <button onClick={() => this.HandleDelete(tech)} type="button">
  ```

  para funcionar o somente ao clicar precisamos colocar outra *eron fuction* **() =>** antes da função  

  ```
  import { isThisSecond } from 'date-fns';
  import React, { Component } from 'react'


  class TechList extends Component{
    state = {
      newTech: '',
      techs : [
          'Node.js',
          'React.JS',
          'React Native'
      ]
    };

    handleInputChange = e => {
      console.log(e.target.valeu)
      this.setState({ newTech : e.target.valeu });
    }

    handleSubmit = e => {
      e.preventDefault(); //isso faz que a pagina não seja carregada ao clicar no button, que é default do web

      // this.state.techs.push(e) //isso não funciona porque é imutavel o state
      this.setState({techs: [...this.state.techs, this.state.newTech]}) // estou copiando tudo e adiconado mais um
      // para mudar o estado, precisamos usar SetState, que cria um novo array, e não altera
      //ṕara alterar preciso copiar tudo que estava antes e adicionar ou excluir o que quero
    }

    HandleDelete = (tech) => {
      this.setState({ techs: this.state.techs.filter(t => t !== tech)}) //retorna toddas as tecnologias menos a que estou passando como parametro
    }

    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.newTech}</h1>
          <ul>
            {this.state.techs.map((tech) => (
              <li key={tech}>
                {tech}
                {/* //precisamos abri areon */}
                <button onClick={() => this.HandleDelete(tech)} type="button">
                  Remover
                </button>
                {/* //fucntion () para ele ececutar apenas quando clicar no botão e
                não quando renderizar */}
              </li> //key é para especificar e dizer ao react qual variavel estou mudando, ou referenciando
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange} // onChange faz que tudo que seja mudado no input, fique chamando o metodo handleInputChange
            valeu={this.state.newTech} // isso é uma boa pratico, informando qual o dado que irei mudar
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  }
  ```

  ## Propriedades do React

  vamos criar um arquivo para separar os items dos techs **/src/components/TechItem.js**

  as propriedades dentro do componentes de **class**, para acessar propridades fazemos por exemplo

  ```
  this.props.tech 
  ```

  e propriedades de **funções** podemos acesar por parametros da função


  ```
  { tech }
  ```

  passando assim *tech={tech}*:

  ```
  <TechItem key={tech} tech={tech} />
  ```

  agora vamos passar função como propriedades assim:
  
  ```
  onDelete={() =>this.HandleDelete} 
  ```

  e para receber vamos passar como parâmetro:

  ```
  function TechItem({ tech, onDelete }) {
    return ()
      <li>
        {tech}
        <button onClick={onDelete} type="button">Remover</button>
      </li>
    );
  }
  ```


  ```
  import React from 'react'

  function TechItem({ tech, onDelete }) {
    return ()
      <li>
        {tech}
        <button onClick={onDelete} type="button">Remover</button>
      </li>
    );
  }

  export default TechItem;
  ```

  agora vamos importar o TechItem no TechList:

  ```
  import { isThisSecond } from 'date-fns';
  import React, { Component } from 'react'

  import TechItem from './TechItem';


  class TechList extends Component{
    state = {
      newTech: '',
      techs : [
          'Node.js',
          'React.JS',
          'React Native'
      ]
    };

    handleInputChange = e => {
      console.log(e.target.valeu)
      this.setState({ newTech : e.target.valeu });
    }

    handleSubmit = e => {
      e.preventDefault(); //isso faz que a pagina não seja carregada ao clicar no button, que é default do web

      // this.state.techs.push(e) //isso não funciona porque é imutavel o state
      this.setState({techs: [...this.state.techs, this.state.newTech]}) // estou copiando tudo e adiconado mais um
      // para mudar o estado, precisamos usar SetState, que cria um novo array, e não altera
      //ṕara alterar preciso copiar tudo que estava antes e adicionar ou excluir o que quero
    }

    HandleDelete = (tech) => {
      this.setState({ techs: this.state.techs.filter(t => t !== tech)}) //retorna toddas as tecnologias menos a que estou passando como parametro
    }

    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.newTech}</h1>
          <ul>
            {this.state.techs.map((tech) => (
              <TechItem 
              key={tech} 
              tech={tech}  
              onDelete={() =>this.HandleDelete} />
              // passando propriedades tech={tech}
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange} // onChange faz que tudo que seja mudado no input, fique chamando o metodo handleInputChange
            valeu={this.state.newTech} // isso é uma boa pratico, informando qual o dado que irei mudar
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  }
  ```

  ## Default Props & PropTypes

    ### Default Props
    ele preenche as propriedades cado não seja passado pelo usuario tanto de **funções** como de **classe**

    ```
    TechItem.defaultProps = {
      tech: "Oculto"
    }
    ```

    para classe:
    ```
    static ProTypes = {

    }
    ```


    ### PropTypes

    Ela informa para o desenvolvedor queestá passando uma propriedade que não está correto.

    para isso vamos instalar a biblioteca **PropTypes**

    ```
    yarn add prop-types
    ```

    vamos importar no file **TechItem.js**  ficando dessa forma:


    ```
    import React from 'react';
    import PropTypes from 'prop-types';

    function TechItem({ tech, onDelete }) {
      return ()
        <li>
          {tech}
          <button onClick={onDelete} type="button">Remover</button>
        </li>
      );
    }

    TechItem.defaultProps = {
      tech: "Oculto"
    }

    PropTypes.PropTypes = {
      tech: PropTypes.string,
      onDelete: PropTypes.func.isRequired
    }

    export default TechItem;
    ```
