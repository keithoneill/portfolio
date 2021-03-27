import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/Physics01.png';
import Image02 from '../images/Physics02.png';
import Gif from '../images/physics.gif';

function Physics() {
  return (
    <div>
      <ProjectDetails
      title = 'Physics of Sound'
      image01 = {Image01}
      image02 = {Image02}
      gif = {Gif}
      job = 'Project Manager'
      description = 'As the Project Manager for the Physics of Sound course at Atlanta Institute of Music and Media, I oversaw the creation and development of the online course. I coordinated with the instructor and the audio and video department. As the Senior Instructional Designer at the school, I oversee the development of online courses the Music Production certificates and degrees.'
      />
    </div>
  );
}

export default Physics;