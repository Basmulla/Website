import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import SWK from './pages/SWK';

import Header from './components/Header'
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import LinkData from "./components/Data.json";
import MultiStepForm from './components/MultiStepForm';

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
          <Route exact path="/SWK" component={SWK} />
          <Route exact path="/SignupForm" component={MultiStepForm} />
          <SearchBar placeholder="Search ..." data={LinkData} />
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
