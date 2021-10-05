# Criando projeto do zero

Não precisamos ficar criando projeto react de forma manual como fizemos antes.

podemos  usar o script react que já cria tudo para nos da seguinte forma:

~~~bash
yarn create react-app <nome do projeto>
~~~

com [typescript](https://create-react-app.dev/):

~~~bash
yarn create react-app <nome do projeto> --template typescript
~~~

com [next](https://nextjs.org/):

~~~bash
yarn create next-app <nome do projeto> --typescript
~~~

neste tutorial vamos usar a primeira opção, apenas com javascript:


~~~bash
yarn create react-app modulo05
~~~

com isso nã precisamo criar nosso projeto do zero, ele ja instala varias biblitecas necessarias para o desenvolvimento inicial como:

- [react-scripts](https://www.npmjs.com/package/react-scripts) ->  babel, webpack

- [react-dom](https://pt-br.reactjs.org/docs/react-dom.html) -> O pacote react-dom provê métodos específicos para o DOM que podem ser usados no nível superior de sua aplicação como uma válvula de escape para sair do modelo do React se você precisar. A maioria de seus componentes não devem precisar deste módulo.


- [react](https://pt-br.reactjs.org/)

- [web-vitals](https://web.dev/vitals/) ->  Web Vitals é uma iniciativa do Google para fornecer orientação unificada para sinais de qualidade essenciais para proporcionar uma ótima experiência ao usuário na web.

- [testing-library/jest-dom](https://github.com/testing-library/jest-dom#readme) ->  A @testing-library/jest-dombiblioteca fornece um conjunto de combinadores de jest personalizados que você pode usar para estender o jest. Isso tornará seus testes mais declarativos, claros para ler e manter.

- [testing-library/react](https://github.com/testing-library/react-testing-library) -> O React Testing Libraryé uma solução muito leve para testar os componentes do React. Ele fornece funções utilitárias leves em cima react-dome react-dom/test-utils, de uma forma que incentiva melhores práticas de teste. Seu principal princípio orientador é:


- [testing-library/user-event](https://www.npmjs.com/package/react-scripts) -> user-eventtenta simular os eventos reais que aconteceriam no navegador à medida que o usuário interage com ele. Por exemplo userEvent.click(checkbox), mudaria o estado da caixa de seleção.


foi incluido alguns scripts padrão:

- yarn *start* -> executar a,biente de desenvolvimento webpack
- yarn *build* -> executar ambiente de produção webpack leve
- yarn *test* -> executar os testes implementados
- yarn *eject* -> ele vai ejetar as configurações padrões para raiz do projeto assim podemos reconfigura-lo de forma mais funda, ou mudar algo que queremos


agora vamos linpar um pouco o prjeto retirando algumas coisas que não queremos:

## [eslint](https://eslint.org/)

  Aqui vamos retirar a configuração padrão do eslint porque vamos fazer a nossa, como preferimos.

## [public](https://github.com/jhonatheberson/dominating-reactjs/tree/master/primeiro_projeto_com_react/modulo05/public)

  Agora vou na pasta **public** e abrir arquivo inde.html e vou retirar os comentarios deixando de forma mais clean caso queira **opcional**

  também podemos excluir o [PWA](https://web.dev/add-manifest/) que é manifesto do aplicativo da web é um arquivo JSON que informa ao navegador sobre o seu Progressive Web App e como ele deve se comportar quando instalado na área de trabalho ou dispositivo móvel do usuário. Um arquivo de manifesto típico inclui o nome do aplicativo, os ícones que o aplicativo deve usar e a URL que deve ser aberta quando o aplicativo é iniciado. se não formos sar o PWA.


  para exluir vamos deletar a seguinte linha de comando:

  ~~~javascript
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  ~~~

  e deletar o arquivo **public/manifest.json**

  ## [src](https://github.com/jhonatheberson/dominating-reactjs/tree/master/primeiro_projeto_com_react/modulo05/src)

  para editar nosso react precisamos ir no arquivo **App.js**

  vamos retirrar tudo que está dentro da div:

  ~~~javascript
  div className="App"
  ~~~

  colocando o:

  ~~~javascript
  <p>
    Hello World
  </p>
  ~~~

  aqui também temos alguns arquivos de estilização (App.css, index.css, logo.svg), testes (App.test.js, setupTests.js), e desempenho (reportWebVitals.js)

  caso não queremos usar podemos deletar esses arquivos ou substituir suas configurações.

  nesse caso vamos em deletar porque não vamos aproveitar esses estilos e nem os testes inicialmente

  assim ficando dentro da pasta **src/** apenas esses arquivos

  - App.js
  - index.js
  - reportWebVitals.js

  para isso funcinar precisamos retirar as importações dentro de [index.js](https://github.com/jhonatheberson/dominating-reactjs/blob/master/primeiro_projeto_com_react/modulo05/src/index.js) vou retirar a importação do css

  ~~~javascript
  import './index.css';
  ~~~

  ficando dessa forma:

  ~~~javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import reportWebVitals from './reportWebVitals';

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();
  ~~~

  agora no **App.js** vou retirar as importanções

  ~~~javascript
  import logo from './logo.svg';
  import './App.css';
  ~~~

  no final meu arquivo [App.js](https://github.com/jhonatheberson/dominating-reactjs/blob/master/primeiro_projeto_com_react/modulo05/src/App.js) ficou assim:


  ~~~javascript

  function App() {
    return (
      <div className="App">
          <h1>
            Hello World
          </h1>
      </div>
    );
  }

  export default App;

  ~~~

  ### **OBS**: quando temos muitas configurações especificas não é muito legal usar **create react-app**, mas 99,9% é possivel utilizar sim **create react-app**.




# ESlint, Prettier & EditorConfig

  ## EditorConfig

  Iremos criar um padrão de escrita para isso, vamos utilizar a extenssão no VSCode [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [aqui](https://github.com/editorconfig/editorconfig-vscode) está o repositorio.

  ao clicar no botão direito no mause no raiz do projeto tem opção criar **Generate .editorconfig** em seguida ele irá criar o arquivo **./.editorconfig** que ja vem com algumas configurações, vamos alterar as seguinte coisas:

  - trim_trailing_whitespace = true
  - insert_final_newline = true


  ficando o arquivo dessa forma:

  ~~~json
  # EditorConfig is awesome: https://EditorConfig.org

  # top-most EditorConfig file
  root = true

  [*]
  indent_style = space
  indent_size = 2
  end_of_line = lf
  charset = utf-8
  trim_trailing_whitespace = true
  insert_final_newline = true
  ~~~

  pronto o editorconfig está configurado.

  ## ESlint

  Primerio coisa é adicionar o ESlint como dependenca de desenvolvimento:

  ~~~bash
  yarn add eslint -D
  ~~~

  agora vamos iniciar as configurações fazendo assim:


  ~~~bash
  yarn eslint --init
  ~~~

  vamos selecionar a opção **To check syntax, find problems, and enforce code style** em seguida **JavaScript modules (import/export)**, depois **React**, se tiver usando typescript, mark como **Yes**, em nosso caso não estamos usando então será **No**,como estamos utilizando o react no **Browser** iremos marcar essa opção.
  Vamos utilizar **Use a popular style guide** e seguida  **Airbnb: https://github.com/airbnb/javascript**, vamos marcar **JavaScript**, depois vamos autorizar as instalações apertando **Yes** enter

  por padrão o eslint instala usando [npm](https://www.npmjs.com/), como estamo usando o **yarn** vamos deletar o arquivo **package-lock.json** em seguida roda **yarn** na raiz do projeto.

  ~~~bash
  yarn
  ~~~

  ### OBS: certifique-se que npm está instalado em sua maquina



  ## Prettier

  para finalizamos o ***eslint** vamos instalar o prettier

  ~~~bash
  yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
  ~~~


  agora vamos no arquivo **./.eslintrc.js** e vamos adiconar alguns **extends**:

  ~~~javascript
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  ~~~

  vamos adicionar um **parser**:

  ~~~javascript
  parser: 'babel-eslint',
  ~~~

  e vamos adicionar **glugins**

  ~~~javascript
  plugins: [
    'react',
    'prettier'
  ],
  ~~~

  agora vamos adicionar alguma **rules** de **Airbnb**:

  ~~~javascript
  rules: {
    'prettier/prettier': 'error', //aponta qualquer regra que ele não encontrar como erro
    'react/jsx-filename-extension': [
      'warn',
      { extensions : ['.jsx','js'] } //isso faz que ele não reclame de de codigo jsx(html) em arquivos js
    ],
    'import/prefer-default-export': 'off' //desativa a regra que export não seja default ele não reclame
  },
  ~~~

  vamos criar o seguinte arquivo na raiz do projeto **.prettierrc**

  com seguinte conteudo

  ~~~json
  {
  "singleQuote": true,
  "trailingComma": "es5"
  }
  ~~~

  ### OBS: prettier deixa codigo mais bonito e eslint procura por erros dentro do codigo.

# Roteamento no React
