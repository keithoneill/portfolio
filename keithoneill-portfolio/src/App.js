import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Header from './components/Header';
// import Hero from './components/Hero';
// import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      {/* <Hero /> */}
      <main>
        <div>
          <Container>
            {/* <Projects /> */}
            <ProjectDetails />
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;