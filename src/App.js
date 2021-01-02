import React from 'react'
import AboutMe from './pages/AboutMe'


import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Work from './pages/Work';

import { Switch, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
            <AboutMe />
        </Route>

        <Route exact path="/work">
            <Work />
        </Route>

        <Route exact path="/contact">
            <Contact />
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
