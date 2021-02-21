
import React from 'react';
import Common from './Common';
import webImage from '../src/Images/image1.png';

const Home = () => {
  return (
    <>
      <Common topic='Grow your business with'
        btnText='Get Started'
        imgSrc={webImage}
        visit='/service'
       />
    </>
  );
}

export default Home;