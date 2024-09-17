import React from 'react';

import PromoBanner from '../components/PromoBanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CategoryGrid from '../components/Category';




function HomePage() {
  return (
    <div>
         <Navbar />
   
      <PromoBanner/>
   <CategoryGrid/>
     <Footer/>
    </div>
  );
}

export default HomePage;
