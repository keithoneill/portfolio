import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/Prepclass01.png';
import Image02 from '../images/Prepclass02.png';
import Gif from '../images/prepclass.gif';

function Prepclass() {
  return (
    <div>
      <ProjectDetails
      title = 'Music Production Prep Class'
      image01 = {Image01}
      image02 = {Image02}
      gif = {Gif}
      job = 'Training Specialist'
      description = 'As the Training Specialist for the Music Production Prep Class for Atlanta Institute of Music and Media, I created an online prep course for incoming music production students. The course serves as introductory content for students interested in pursuing a career in music production. I developed the content for the Online Learning Management System including wriing and shooting the various instructional videos. I incoporated my experience in Instructional Design to develop knowledge checks for students progressing through the course.'
      />
    </div>
  );
}

export default Prepclass;