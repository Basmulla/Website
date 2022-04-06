import Home from './pages/Home';
import About from './pages/About';
import SWK from './pages/SWK';

import Header from './components/Header'
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/Website"component={Home}/>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/SWK" component={SWK} />
      </Switch>
      <Footer />
    </Router>
    </div >
  );
}

export default App;
