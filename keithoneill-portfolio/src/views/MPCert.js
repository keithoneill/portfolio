import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/MPCertPage01.jpg';
import Image02 from '../images/MPCertPage02.jpg';
import Gif from '../images/MusicProductionCert.gif';

function MPCert() {
  return (
    <div>
      <ProjectDetails
      title = 'Certificate In Music Production'
      image01 = {Image01}
      image02 = {Image02}
      gif = {Gif}
      job = 'Curriculum Designer'
      description = 'As the Curriculum Designer for the Certifcate in Music Production Program at Atlanta Institute of Music and Media, I developed the course structure, content, and credit weighting. I designed the certificate program for the beginner or experienced student interested in pursuing a career in music production. The program can be completed in as little as nine months allowing someone to enter the workforce quickly. I also chose courses that could easily translate to online classes for future development.'
      />
    </div>
  );
}

export default MPCert;