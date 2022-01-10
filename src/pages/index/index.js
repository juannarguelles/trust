import React from 'react';
import Hero from './components/Hero/Hero';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section3 from './components/Sections/Section3';
import Section4 from './components/Sections/Section4';

const Home = () => {
  return (
    <>
     <Hero/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
    </>
  );
};

export default Home;