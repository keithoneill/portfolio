import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/IAP01.png';
import Image02 from '../images/IAP02.png';
import Gif from '../images/iap.gif';

function IAP() {
  return (
    <div>
      <ProjectDetails
      title = 'Introduction to Audio Production I and II'
      image01 = {Image01}
      image02 = {Image02}
      gif = {Gif}
      job = 'eLearning Instructional Designer'
      description = 'As the instructor and eLearning Instructional Designer for both Introduction to Audio Production courses at Atlanta Institute of Music and Media, I developed the curriculum and content for the LMS. I also worked with the video department to shoot and assist in editing the lectures. I utilized my Web Development experience to customize the online learning experience for students to make the content more interactive and engaging.'
      />
    </div>
  );
}

export default IAP;