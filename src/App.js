import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Pokemon from './components/Pokemon/Pokemon';
import './App.scss';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props}></Home>}></Route>
          <Route path="/pokemon/:id?" render={(props)=> <Pokemon {...props}></Pokemon>}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
