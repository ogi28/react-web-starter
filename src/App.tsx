import React from 'react';
import { Home } from "./Pages/Home";
import { BrowserRouter as BR, Route, Switch } from "react-router-dom";
import './App.css';

function App() {

  return (
    <BR>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BR>
  )

}

export default App;
