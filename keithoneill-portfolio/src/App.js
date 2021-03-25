import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import MPCert from './views/MPCert';
import MPAM from './views/MPAM';
import Landing from './views/Landing';


const App = () => {
  return (
    <Router>
        <CssBaseline />
        <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Container disableGutters>
                <Route path="/mpcert" exact component={MPCert} />
                <Route path="/mpam" exact component={MPAM} />
              </Container>
            </Switch>
          </main>
        <Footer/>
      </Router>
  );
}

export default App;