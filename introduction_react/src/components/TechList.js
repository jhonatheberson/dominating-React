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