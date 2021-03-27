import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/Onlinequiz01.png';
import Image02 from '../images/Onlinequiz02.png';
import Gif from '../images/onlinequiz.gif';

function Quiz() {
  return (
    <div>
      <ProjectDetails
      title = 'Online Quiz Maker'
      image01 = {Image01}
      image02 = {Image02}
      gif = {Gif}
      job = 'Design and Development'
      description = 'For a course project in Advanced Server Side Languages, I Designed and Developed an Online Quiz Maker. This tool allows teachers or students to make online quizes adding multiple questions with various choices. I developed both the front end and the back end. I developed both a Node.Js and React version. I incorporated OAuth authentication with GitHub and utilized a Sequelized database for storing information.'
      />
    </div>
  );
}

export default Quiz;