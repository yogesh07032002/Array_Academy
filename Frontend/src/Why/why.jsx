import Footer from '../components/Footer';
import Internships from '../components/Internships';
import Navbar from '../components/Navbar';
import React from 'react';

// Importing the WhyUs component


function Why() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Internships /> 
      </div>
      <Footer />
    </>
  );
}

export default Why;
