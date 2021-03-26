import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Image01 from '../images/WW01.png';
import Image02 from '../images/WW02.png';
import Gif from '../images/ww.gif';

function WW() {
  return (
    <div>
      <ProjectDetails
      title = 'WhatchuWatchin'
      image01 = {Image01}
      image02 = {Image02}
      gif2 = {Gif}
      job = 'Design and Development'
      description = 'For my Capstone Project in the Web Design and Development Degree, created a web application to assist people in finding what to watch called WhatchuWatchin. I created the front end in React and Redux. I also created the back end storing users information in a database via sequelize. The application allows users to choose shows or movies to watch with a tinder styles swipe. Liked videos are added to the users watchlist with future updates incorporating linked accounts with shared watchlist. I beleive applications like this can be incoporated in a learning environment for multiple select questions or group or team assigning.'
      />
    </div>
  );
}

export default WW;