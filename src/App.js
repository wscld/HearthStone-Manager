import React from 'react';
import './App.css';
import Home from './pages/Home';
import ClasseInicial from './pages/ClasseInicial';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/HearthStone-Manager/deck" children={<Home />} />
        <Route path="/HearthStone-Manager" children={<ClasseInicial />} />
      </Switch>
    </Router>
  );
}

export default App;
