import React from 'react';
import './App.css';
import Home from './components/Home';
// Alias of BrowseerRouter to Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UserForm from './components/UserForm';
import UserSignup from './components/UserSignup';



const App = () => {

   return (

    <Router>
    <Switch>
    <Route path="/" exact component={UserForm} />
    <Route path="/signup" component={UserSignup} />
    <Route path="/home" component={Home} />
    </Switch>
    
    {/* </div> */}
    </Router>
    )
}

export default App;
