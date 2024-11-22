import Footer from "./Footer";
import React from "react";

const Career = () => {
  // Job openings array
  const jobOpenings = [
    {
      title: "Software Engineer",
      company: "Accenture",
      location: "Remote",
      link: "https://www.accenture.com/us-en/careers/jobdetails?id=XYZ1234",
    },
    {
      title: "Web Developer",
      company: "Redington",
      location: "Bengaluru, India",
      link: "https://www.redingtonindia.com/career/jobdetails?id=XYZ5678",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
  ];

  const firstTenJobs = jobOpenings.slice(0, 10);
  const remainingJobs = jobOpenings.slice(10);

  return (
    <>
      <div className="bg-gray-50 py-16 px-5">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-8 mt-9">
            Explore Career Opportunities with Leading Tech Companies
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            At{" "}
            <b>
              <a href="/" className="text-orange-500">
                ArrayLogic Academy
              </a>
            </b>
            , we believe in empowering our employees to grow professionally and
            personally. We are constantly evolving, and as part of that, we
            encourage individuals to explore diverse career opportunities within
            our organization and beyond. While we currently focus on providing
            top-tier training and development programs, we understand that many
            of our students and prospective employees may also be looking for
            exciting career prospects. That's why we've put together a list of
            job opportunities and career pages from various leading companies in
            the tech and education sectors. By clicking the links below, you can
            explore the latest job openings from these renowned companies and
            take the next step in your career.
          </p>
          <p className="mb-10 text-4xl">
            Ready to land your dream job? Let us help you build a standout
            resume –{" "}
            <b className="text-green-500 font-bold">
              <a href="/contact">Contact Us today!</a>
            </b>
          </p>

          {/* Display the first 10 job cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {firstTenJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {job.title}
                </h3>
                <p className="text-gray-500 mb-2">{job.company}</p>
                <p className="text-gray-400 text-sm mb-4">{job.location}</p>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-lg transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          {/* Add the "Do you want any software course?" section */}
          <div className="mt-12 p-8 bg-purple-100 rounded-lg">
            <h3 className="text-2xl font-semibold text-rose-500 mb-4">
              Looking to Upgrade Your Skills? Explore Our Software Courses!
            </h3>
            <p className="text-lg text-black mb-6">
              Whether you're aiming for a career in software development or
              looking to level up your existing skills, our industry-focused
              courses can help you achieve your goals. Take the first step
              toward a successful career in tech.
            </p>
            <a
              href="/course"
              className="text-white bg-black hover:bg-purple-700 py-3 px-6 rounded-lg transition duration-300 block md:inline-block"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="text-white bg-black hover:bg-purple-700 py-3 px-6 md:ml-3 mt-4 md:mt-0 rounded-lg transition duration-300 block md:inline-block"
            >
              If Any Query Contact Us
            </a>
          </div>

          {/* Display the remaining job cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
            {remainingJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {job.title}
                </h3>
                <p className="text-gray-500 mb-2">{job.company}</p>
                <p className="text-gray-400 text-sm mb-4">{job.location}</p>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-lg transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-lg text-black mb-6">
          We understand that job descriptions can sometimes leave you with more
          questions than answers. If you're interested in learning more about
          any of the job openings listed or need further details about a
          specific role, we’re here to help! Whether it's about job
          responsibilities, qualifications, company culture, or the application
          process, we're ready to provide you with the insights you need to make
          an informed decision.
        </p>
        <p className="text-3xl mb-4">Have a question?</p>
        <p className="mb-4">
          Reach out to us for detailed information on any job listing and take
          the next step in your career journey with confidence!
        </p>
        <div className="flex sm:flex-row flex-col sm:items-center justify-center gap-4">
  {/* IT Courses Button */}
  <div className="flex sm:flex-row flex-col sm:items-center justify-center gap-4">
  {/* IT Courses Button */}
  <a href="/course" className="bg-black text-white py-2 px-4 mb-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-600 focus:outline-none sm:w-auto w-full">
    IT Courses
  </a>

  {/* Contact Us Button */}
  <a href="/contact" className="bg-gradient-to-r from-purple-600 to-blue-500 mb-5 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-600 focus:outline-none sm:w-auto w-full">
    Contact Us for More Details
  </a>

  {/* Resume Building Button */}
  <a href="/contact" className="bg-black text-white py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 mb-5 hover:from-blue-500 hover:to-purple-600 focus:outline-none sm:w-auto w-full">
    Resume Building
  </a>
</div>
</div>

      </div>
      <Footer />
    </>
  );
};

export default Career;
