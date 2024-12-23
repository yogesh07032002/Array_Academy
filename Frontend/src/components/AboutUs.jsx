import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // For the CTA button link
import React from "react";
import aboutimg from "../../public/aboutimg.webp"; // Replace with your image path

function AboutUs() {
  return (
    <>
   

      <div className="mt-12 md:mt-18">
        <img src={aboutimg} alt="Image Coming Soon"></img>
      </div>
      <section className="bg-white py-2 md:py-5">
        <div className="container mx-auto px-4 md:px-4 text-center">
          <h1 className="text-xl md:text-4xl font-bold text-red-600 mb-1 md:mb-6" title=" ArrayLogic Academy: Best IT Training Institute in Pune for Job-Oriented Courses.">
            Best IT Training Institute in Pune with Strong Ties to Top IT Companies.
          </h1>
          <div className="flex flex-col md:flex-row items-start justify-between px-0  md:px-0 py-0 md:py-2">
            <div className="w-full md:w-1/2">
              <h1 className="text-black mb-4 text-left leading-relaxed md:pr-2 md:ml-0 text-sm md:text-xl md:mt-4">
                ArrayLogic Academy is one of the Best IT Training Institutes in
                Pune, committed to bringing new skills and talent into Pune’s IT
                sector. As a proudly unique IT company, our services span all
                levels of IT recruitment and skill development. We have
                successfully helped over 5000+ students launch their careers in
                the Tech and Digital industries while supporting their growth
                through our blend of training and recruitment services. Our
                mission across all services remains clear: to drive IT forward
                for the success of our candidates, clients, and Pune's thriving
                IT sector.
              </h1>
            </div>
            <div className="w-full md:w-1/2 md:ml-6 hidden sm:block">
              <img
                src="/ArrayAbout2.webp" // Update with your image path
                alt="About Us Image"
                className="w-full h-auto rounded-3xl border-2 border-black"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold md:text-4xl text-orange-600 mb-2 mt-2 text-center md:mt-10">
            Top Campus Recruitment & IT Training Institute: ArrayLogic Academy
          </h2>
          <h2 className="text-black md:text-xl mb-4 text-left leading-relaxed md:pr-0 md:ml-0 text-sm md:mt-4 px-2 md:px-2 md:mr-0">
            ArrayLogic Academy is a leading Campus Recruitment & IT Training
            Institute, offering Job-Oriented Training that prepares students for
            successful careers in the Tech and Digital industries. Our
            curriculum focuses on practical, industry-relevant skills, ensuring
            students are job-ready. Through our comprehensive Campus Recruitment
            strategy, we connect students with top IT companies, enhancing their
            chances of securing a job. Our tailored training programs are
            designed to bridge the gap between education and industry
            requirements. At ArrayLogic Academy, we aim to empower students with
            the skills needed for thriving careers in the tech world. Our focus
            on Job-Oriented IT Training and strategic recruitment opportunities
            ensures that every student is well-prepared for their professional
            journey.
          </h2>

          {/* Our Mission & Vision Section */}
          <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-6">
                  Our Mission & Vision
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* Our Mission */}
                <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 text-center lg:text-left">
                    Our Mission
                  </h3>
                  <ol className="text-left text-black text-sm md:text-lg leading-relaxed space-y-2">
                    <li>Provide high-quality Job-Oriented Training to students.</li>
                    <li>
                      Offer strategic Campus Recruitment solutions connecting students
                      with top IT companies.
                    </li>
                    <li>
                      Empower students to build successful careers in the Tech and Digital
                      industries.
                    </li>
                    <li>
                      Bridge the gap between education and employment by equipping
                      students with industry-relevant skills.
                    </li>
                    <li>
                      Ensure every student is job-ready and prepared for the competitive
                      job market.
                    </li>
                  </ol>
                </div>

                {/* Our Vision */}
                <div className="lg:w-1/2 bg-white p-6 mt-6 lg:mt-0 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 text-center lg:text-left">
                    Our Vision
                  </h3>
                  <ul className="text-left text-black text-sm md:text-lg leading-relaxed space-y-2">
                    <li>
                      To be the leading IT training institute providing top-notch online
                      and classroom courses.
                    </li>
                    <li>
                      Offer hands-on experience in cutting-edge technologies like Full
                      Stack, Data Science, Python, DevOps, Cloud Computing, Digital
                      Marketing, Java, and more.
                    </li>
                    <li>
                      Empower students with practical skills to excel in their careers in
                      the Tech and Digital industries.
                    </li>
                    <li>
                      Provide comprehensive internship opportunities to enhance
                      real-world learning.
                    </li>
                    <li>
                      Ensure students receive placement assistance to secure rewarding
                      career opportunities.
                    </li>
                    <li>
                      Continuously innovate and adapt our training programs to meet
                      industry demands and trends.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-gray-100 py-8 rounded-lg shadow-md">
            <h3 className="text-2xl md:text-4xl font-bold text-purple-600  mb-1 md:mb-2 text-center">
              Why Choose Us?
            </h3>
            <ul className="text-black text-left px-3 md:px-0 text-sm md:text-lg leading-8 space-y-1 md:space-y-4 lg:w-3/4 mx-auto">
              <li>
                <strong>Cutting-Edge Curriculum:</strong> Our courses are designed by
                experts to cover the latest technologies, frameworks, and tools. From
                Java Full Stack to AI and Cloud Computing, our programs keep you ahead
                of the curve.
              </li>
              <li>
                <strong>Hands-On Learning:</strong> We believe in learning by doing. Our
                students work on real-world projects that help them build a portfolio
                and gain practical experience.
              </li>
              <li>
                <strong>Expert Instructors:</strong> Learn from experienced professionals
                who have years of industry experience and are committed to your success.
              </li>
              <li>
                <strong>Personalized Support:</strong> We offer one-on-one mentorship and
                career guidance to help you achieve your goals, both during and after
                your course.
              </li>
              <li>
                <strong>Placement Assistance:</strong> With our strong network of
                industry partners, we provide job placement support to help you secure
                your dream job.
              </li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="bg-blue-600 text-white py-12 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Start Your Tech Journey Today</h3>
            <p className="text-lg mb-8">
              Ready to take the next step in your career? Join{" "}
              <strong>ArrayLogic Academy</strong> today and gain the skills needed to
              succeed in the ever-evolving tech industry.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
              onClick={() => window.scrollTo(0, 0)}

            >
              Get Started
            </Link>
          </section>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
