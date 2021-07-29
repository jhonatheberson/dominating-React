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