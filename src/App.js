import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';

import Header from './components/Header'
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import './components/SearchBar.css';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/Home" />
          )} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
