import Footer from '../components/Footer';
import Internships from '../components/Internships.jsx';
import Navbar from '../components/Navbar';
import React from 'react';
import WhyUs from '../components/WhyUs.jsx';

// Importing the WhyUs component


function Intern() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Internships/>/* Displaying the WhyUs section here */}
      </div>
      <Footer />
    </>
  );
}

export default Intern;
