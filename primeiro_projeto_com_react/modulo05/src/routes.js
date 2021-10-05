import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main';
import Repository from './pages/Repository';

    
// o BrowserRouter faz que as rotas possa ser criadas ex: http://localhost:3000/repository
//o Swith garente que seja chamado apenas um unico componente por vez 
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

