import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import './App.css';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Board} path="/board/:id" />
        <Redirect exact to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
