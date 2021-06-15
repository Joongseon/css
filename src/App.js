import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import './App.css';
import logo from './assets/logo.png';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}  />
        <Route path="/createroom" exact component={CreateRoom} />
        <Route path="/room/:roomID" component={Room} />
      </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
