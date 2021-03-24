import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Header from './components/Header'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <div>
          <Container maxWidth="sm">
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;