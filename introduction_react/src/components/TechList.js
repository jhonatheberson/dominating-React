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

  // Executado assim que o compoenente aparece em tela
  componentDidMount() {
    //exemplo busca de dados de uma api externa
    //usado para cerragar o compoenete assim que inicializza
    //localStorage é cache do navegador
    const techs = localStorage.getItem('techs'); //pega o que tem

    if (techs){ // verifica se tem algo em techs
      this.setState({techs:JSON.parse(techs) });
    }
  }
  // Executado sempre que ouver alterações nas props ou estado
  // componentDidUpdate(_, prevState){
  //monitorar compenentes e propriedades
  componentDidUpdate(prevProps, prevState){
    if (prevState.techs !== this.state.techs){
      //verifica se o anterio "prevState" está deferente de agora "state.techs"
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
    // se tiver alteração nas propriedades, conseguimos acessar a novos  dados da propeiedades aqui
    // this.props
    // this.state
  }
  // Executado quando o componente deixa de existir
  componentWillUnmount(){
    //usado por exemplo "eventListen" ouve teclado limpa sujeira 
  }


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
          <TechItem />
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