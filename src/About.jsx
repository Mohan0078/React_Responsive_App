
import React from 'react';
import Common from './Common';
import webImage from '../src/Images/image1.png';

const About = () => {
  return (
    <>
      <Common 
        topic='Welcome to About Page' 
        btnText='Contact Now'
        imgSrc={webImage}
        visit='/contact'
      />
    </>
  );
}

export default About;
