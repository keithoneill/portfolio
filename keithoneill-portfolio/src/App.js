import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Hero />
      <main>
        <div>
          <Container>
            
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;