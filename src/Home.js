import React from 'react';
import Services from './components/Services';
import Trusted from './components/Trusted';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';

const Home = () => {
  const data = {
    name: "My store",
  };
  return(
  <>
    <HeroSection myData={data}/>
    <FeaturedProducts />
    <Services />
    <Trusted />
  </>
  );
};



export default Home;