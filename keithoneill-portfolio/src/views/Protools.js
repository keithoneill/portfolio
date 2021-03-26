import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/ProTools01.png';
import Image02 from '../images/ProTools02.png';
import Gif from '../images/protools.gif';

function Protools() {
  return (
    <div>
      <ProjectDetails
      title = 'Pro Tools 101 and 110'
      image01 = {Image01}
      image02 = {Image02}
      gif = {Gif}
      job = 'eLearning Instructional Designer'
      description = 'As the instructor and eLearning Instructional Designer for both Pro Tools 101 and 110 courses at Atlanta Institute of Music and Media, I developed the curriculum and content for the LMS. I also worked with the video department to shoot and assist in editing the lectures. I utilized my Web Development experience to customize the online learning experience for students to make the content more interactive and engaging. As an Avid Certified Expert Instructor I also facilitate all Avid Certification Exams at the school.'
      />
    </div>
  );
}

export default Protools;