import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/MPAMPage01.jpg';
import Image02 from '../images/MPAMPage02.jpg';
import Gif from '../images/MPAM.gif';

function MPCert() {
  return (
    <div>
      <ProjectDetails
      title = 'A.A.S. Music Production and Audio for Media'
      image01 = {Image01}
      image02 = {Image02}
      gif = {Gif}
      job = 'Curriculum Designer'
      description = 'As the Curriculum Designer for the Associate of Applied Science in Music Production and Audio for Media at Atlanta Institute of Music and Media, I developed the course structure, content, and credit weighting. I designed the associate degree for the beginner or experienced student interested in pursuing a career in music production or sound for film, television, or gaming. In addition to Department of Education approval I also oversaw the accreditation process including consulting with an audio professionals board of directors.'
      />
    </div>
  );
}

export default MPCert;