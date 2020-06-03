import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Nav from './Components/nav'
import Dashboard from './Components/Dashboard'
import UserScreen from './Components/UserScreen/UserScreen';
import LoginScreen from './Components/LoginScreen'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/**
 * here will everything appear, the Routing the paths 
 */

function App(props) {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
      <Route path="/Dashboard"  render={props=><Dashboard {...props}/>}/>
      <Route path="/UserScreen:id"  render={props=><UserScreen {...props}/>}/>
      <Route path="/UserScreen"  render={props=><UserScreen {...props}/>}/>
      <Route path="/LoginScreen"  render={props=><LoginScreen {...props}/>}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
