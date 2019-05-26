import React from 'react';
import './App.css';
import Home from './components/Home';
// Alias of BrowseerRouter to Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login';



const App = () => {

   return (

    <Router>
    {/* <div>
      <img style={{marginLeft:'700px', marginTop:'10px'}} src="http://localhost:3000/buyMe.png"/>
      <ol>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/">Blank</Link>
        </li>
      </ol> */}
    <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" component={Home} />
    </Switch>
    {/* </div> */}
    </Router>
    )
}

export default App;
