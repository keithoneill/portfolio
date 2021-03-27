import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/Midi01.png';
import Image02 from '../images/Midi02.png';
import Gif from '../images/midi.gif';

function Midi() {
  return (
    <div>
      <ProjectDetails
      title = 'MIDI: Synthesis and Sequencing'
      image01 = {Image01}
      image02 = {Image02}
      gif = {Gif}
      job = 'Project Manager'
      description = 'As the Project Manager for the MIDI: Synthesis and Sequencing course at Atlanta Institute of Music and Media, I oversaw the creation and development of the online course. I coordinated with the instructor and the audio and video department. As the Senior Instructional Designer at the school, I oversee the development of online courses the Music Production certificates and degrees.'
      />
    </div>
  );
}

export default Midi;