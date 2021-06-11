import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import About from './components/About'
import Home from './components/Home'
import {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function App() {


  return (
    <Router>
    <div className="App">
    <div className='nav-bar'>
        <Link to={'/'} className='nav-link' > home </Link >
        <Link to={'/About'} className='nav-link'> about </Link>
    </div>
      <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
      </Switch>
      <Main/>
    </div>
    </Router>
  );
}

export default App;
