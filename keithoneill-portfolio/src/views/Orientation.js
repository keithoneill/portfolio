import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/Orientation01.png';
import Image02 from '../images/Orientation02.png';
import Gif from '../images/orientation.gif';

function Orientation() {
  return (
    <div>
      <ProjectDetails
      title = 'New Student Orientation'
      image01 = {Image01}
      image02 = {Image02}
      gif = {Gif}
      job = 'Training Specialist'
      description = 'As the Training Specialist for New Student Orientation for Atlanta Institute of Music and Media I created and designed the online orientation for onboarding new students. The orientation covers all of the schools policies with a knowledge check. I utilized my experience in Web Design and Development to styled the content and pages for better student engagement. The course also includes Title IX training which is not only essential for schools but also for company training.'
      />
    </div>
  );
}

export default Orientation;