import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Internships from '../components/Internships'; // Importing the Internships component
import Navbar from '../components/Navbar';
import React from 'react';
import WhyUs from '../components/WhyUs'; // Importing the WhyUs component for reference if needed

function Intern() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Internship Opportunities | ArrayLogic Academy</title>
        <meta
          name="description"
          content="Explore internship opportunities at ArrayLogic Academy. Gain hands-on experience in IT fields like Full Stack Development, Data Science, AI, and Cloud Computing.ArrayLogic Academy provides top IT internship opportunities in Pune. Join our structured internship programs in Java Full Stack, MERN Stack, MEAN Stack, Python, Data Science, AI, Cloud Computing, and Machine Learning. Gain hands-on experience, work on live projects, enhance your skills, and accelerate your career in the tech industry with expert mentorship and career guidance."
        />
        <meta
          name="keywords"
          content="IT internships in Pune, software development internships, full stack internships, AI internships Pune, data science internships, cloud computing internships, hands-on IT training, ArrayLogic Academy internships, career growth opportunities, tech internships Pune,IT internships Pune, ArrayLogic Academy internships, Java Full Stack internships Pune, MERN Stack internship, MEAN Stack internship Pune, Python internship, Data Science internship Pune, AI internships, Cloud Computing internships Pune, Machine Learning internship, real-world IT projects internships, tech internships Pune, software development internships Pune, industry internships Pune, career development internships, IT career opportunities, tech career growth, internship programs Pune"
        />
        <meta
          property="og:title"
          content="Internship Opportunities | ArrayLogic Academy"
        />
        <meta
          property="og:description"
          content="Join ArrayLogic Academy for internship programs in cutting-edge IT fields like Full Stack Development, AI, Data Science, and more. Build your career with real-world experience."
        />
        <meta
          property="og:url"
          content="https://www.arraylogicacademy.in/internships"
        />
        <meta
          property="og:image"
          content="URL_to_image_or_logo_here.jpg" // Replace with your logo or image URL
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Internship Opportunities | ArrayLogic Academy"
        />
        <meta
          name="twitter:description"
          content="Discover IT internship programs at ArrayLogic Academy to gain practical experience in tech fields like Full Stack Development, Data Science, and AI."
        />
        <meta
          name="twitter:image"
          content="URL_to_image_or_logo_here.jpg" // Replace with your logo or image URL
        />
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <div className="min-h-screen">
        <Internships /> {/* Displaying the Internships section */}
      </div>
      <Footer />
    </>
  );
}

export default Intern;
