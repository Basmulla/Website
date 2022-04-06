import Home from './pages/Home';
import About from './pages/About';
import SWK from './pages/SWK';

import Header from './components/Header'
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/SWK" component={SWK} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
