import React from 'react';
import './App.css';
import Home from './pages/Home';
import ClasseInicial from './pages/ClasseInicial';
import { HashRouter as Router , Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/deck" children={<Home />} />
        <Route path="/" children={<ClasseInicial />} />
      </Switch>
    </Router>
  );
}

export default App;
