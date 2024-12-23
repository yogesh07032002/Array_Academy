import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import React from 'react';
import WhyUs from '../components/WhyUs';

function Why() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Why Choose ArrayLogic Academy | IT Training Excellence</title>
        <meta
          name="description"
          content="Discover why ArrayLogic Academy is the top choice for IT training. Learn about our expert trainers, industry-relevant curriculum, hands-on projects, and career-focused programs.ArrayLogic Academy is the top choice for IT training in Pune. Our industry-recognized courses in Java Full Stack, MERN Stack, MEAN Stack, Python, Data Science, AI, Cloud Computing, and more offer practical, hands-on experience, personalized mentorship, and guaranteed career support. We provide students with the skills needed to excel in the tech industry and land their dream job."
        />
        <meta
          name="keywords"
          content="Why ArrayLogic Academy, IT training benefits, industry-relevant courses, expert trainers, hands-on IT projects, career-focused IT programs, top IT training institute, tech career, ArrayLogic Academy Pune, IT certifications, job-ready skills, advanced IT training,Why choose ArrayLogic Academy, best IT training institute Pune, Java Full Stack, MERN Stack courses, MEAN Stack training, Python Full Stack, Data Science, Artificial Intelligence, Cloud Computing, Machine Learning, hands-on IT training, industry-focused courses, career-oriented training, job placement assistance, top IT institute Pune, personalized mentorship, professional IT certification, coding bootcamp, tech career development, software development training Pune"
        />
        <meta
          property="og:title"
          content="Why Choose ArrayLogic Academy | IT Training Excellence"
        />
        <meta
          property="og:description"
          content="Learn why students prefer ArrayLogic Academy for IT training. Enroll for expert-led courses and build a successful career in technology."
        />
        <meta property="og:url" content="https://www.arraylogicacademy.in/why" />
        <meta
          property="og:image"
          content="URL_to_image_or_logo_here.jpg" // Replace with a valid image URL
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Why Choose ArrayLogic Academy | IT Training Excellence"
        />
        <meta
          name="twitter:description"
          content="ArrayLogic Academy stands out with expert trainers, hands-on projects, and career-focused IT programs. Enroll and advance your tech career!"
        />
        <meta
          name="twitter:image"
          content="URL_to_image_or_logo_here.jpg" // Replace with a valid image URL
        />
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <div className="min-h-screen">
        <WhyUs />
      </div>
      <Footer />
    </>
  );
}

export default Why;
