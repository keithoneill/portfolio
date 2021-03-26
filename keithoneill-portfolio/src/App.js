import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import MPCert from './views/MPCert';
import MPAM from './views/MPAM';
import IAP from './views/IAP';
import Protools from './views/Protools';
import Quiz from './views/Quiz';
import WW from './views/WW';
import Orientation from './views/Orientation';
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
                <Route path="/introtoaudio" exact component={IAP} />
                <Route path="/protools" exact component={Protools} />
                <Route path="/onlinequiz" exact component={Quiz} />
                <Route path="/whatchuwatchin" exact component={WW} />
                <Route path="/orientation" exact component={Orientation} />
              </Container>
            </Switch>
          </main>
        <Footer/>
      </Router>
  );
}

export default App;