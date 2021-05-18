module.exports = {
  presets: [
    "@babel/preset-env", //transforma novas funcionalidades do javascript que o navegador ainda não entende como import, export, classes
    "@babel/preset-react" //transforma o que o navegador não entende do react, como js
  ],
  plugins : [
    '@babel/plugin-proposal-class-properties'
  ]
};