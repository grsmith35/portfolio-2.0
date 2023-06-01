import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import React from 'react';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

function App() {

  return (
    <div className="conatiner">
      {/* <Router> */}
      <HashRouter>
        <Nav></Nav>
        <main className="conatiner">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />

            <Route component={About} />
          </Switch>
        </main>
        <div>
          <Footer></Footer>
        </div>
      {/* </Router> */}
      </HashRouter>
    </div>
    
  );
}

export default App;
