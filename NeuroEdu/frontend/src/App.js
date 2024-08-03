// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Novidades from './components/Novidades/Novidades';
import Cefaleia from './components/Treinamento/Cefaleia';
import Epilepsia from './components/Treinamento/Epilepsia';
import Neurovascular from './components/Treinamento/Neurovascular';
import Flashcards from './components/Flashcards/Flashcards';
import Admin from './components/Admin/Admin';

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/novidades" component={Novidades} />
        <Route path="/treinamento/cefaleia" component={Cefaleia} />
        <Route path="/treinamento/epilepsia" component={Epilepsia} />
        <Route path="/treinamento/neurovascular" component={Neurovascular} />
        <Route path="/flashcards" component={Flashcards} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;
