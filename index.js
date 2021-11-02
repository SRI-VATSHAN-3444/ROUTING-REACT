import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'  
import './index.css';  
import App from './App';  
import About from './about'  
import Contact from './contact'  
  
const routing = (  
  <Router>  
    <div>  
      <h1>NPTEL OFFICIAL WEBSITE</h1>  
      <ul>  
        <li>  
          <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/about" exact activeStyle={  
             {color:'green'}  
          }>About NPTEL</NavLink>  
        </li>  
        <li>  
          <NavLink to="/contact" exact activeStyle={  
             {color:'magenta'}  
          }>Contact NPTEL</NavLink>  
        </li>  
      </ul>  
      <Route exact path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  