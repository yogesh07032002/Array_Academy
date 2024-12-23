import "swiper/css";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

const ServiceSlider = () => {
  const [activeArrow, setActiveArrow] = useState(null); // Track active arrow
  const swiperRef = useRef(null); // Ref for Swiper instance

  const handleArrowClick = (direction) => {
    setActiveArrow(direction); // Mark the arrow as active
    if (swiperRef.current) {
      direction === "next"
        ? swiperRef.current.swiper.slideNext()
        : swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto py:6 md:py-10 px-3 relative ">
      <h2 className="text-center text-xl md:text-4xl   mt-2 md:mt-0 md:mb-8 text-black mb-2">
        Transform Your Future: Best IT Courses Institute in Pune Delivers
        Cutting-Edge IT Training!!
      </h2>

      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        direction="horizontal" // Ensure horizontal direction
        loop={true} // Enable looping
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Keep autoplay running even if the user interacts
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="service-slider"
      >
        {/* Java Full Stack */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2  ">
          
          <div className="w-full flex flex-col items-center">
            <img
              src="./JavaFullStack.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full h-full rounded-lg mb-4"
            />

            <h2 className=" text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              Java Full Stack
            </h2>
            <p className="mb-2 text-center">
              Master full-stack development with Java, including Java, Spring
              Boot, Hibernate, RESTful APIs, HTML, CSS, JavaScript, SQL, Git,
              Maven, and web application architecture to unlock your career in
              enterprise applications.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-2 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Python Full Stack */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
          <div className="w-full flex flex-col items-center">
            <img
              src="./PythonFullStack.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"
            />

            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              Python Full Stack
            </h2>
            <p className=" mb-4 text-center">
              Learn Python along with Django, Flask, HTML, CSS, JavaScript,
              PostgreSQL, Git, REST APIs, and web application architecture to
              become a versatile developer capable of building dynamic, scalable
              applications.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* MERN Stack */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./MERN.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              MERN Stack
            </h2>
            <p className=" mb-4 text-center">
              Build modern web apps with MongoDB, Express, React, and Node.js,
              along with JavaScript, RESTful APIs, Git, HTML, CSS, Redux, and
              Webpack, to become proficient in the complete JavaScript solution.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Data Science */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./DataScience.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              Data Science
            </h2>
            <p className=" mb-4 text-center">
              Unlock the power of data with Python, R, SQL, Pandas, NumPy,
              Matplotlib, machine learning algorithms, data visualization, data
              cleaning, data mining, and big data tools to make data-driven
              decisions.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* ML & AI */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./AIML.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              ML & AI
            </h2>
            <p className=" mb-4 text-center">
              Dive into the future with ML and AI using Python, TensorFlow,
              Keras, PyTorch, Neural Networks, Deep Learning, NLP, data
              processing, and reinforcement learning techniques. Gain experience
              to build cutting-edge solutions .
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>
        {/* DevOps and Cloud Computing */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./DEVOPS.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              DevOps and Cloud{" "}
            </h2>
            <p className=" mb-4 text-center">
              Master the combined disciplines of DevOps and Cloud. Learn
              automation, CI/CD, containerization, and cloud platforms like AWS,
              Azure, and Google Cloud to build scalable systems.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-2 px-6 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* UI/UX Design */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./UIUX.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              UI/UX Design
            </h2>
            <p className=" mb-4 text-center">
              Learn the fundamentals of UI/UX Design, focusing on creating
              visually appealing and user-friendly interfaces. Gain skills in
              design tools, wireframing, prototyping, user research, and testing
              to enhance experience.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3  md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* MEAN Stack */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./MEAN.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              MEAN Stack
            </h2>
            <p className=" mb-4 text-center">
              Build modern web apps with MongoDB, Express, Angular, and Node.js,
              along with JavaScript, RESTful APIs, Git, HTML, CSS, Redux, and
              Webpack, to become proficient in the complete JavaScript solution.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Software Testing */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./TESTING.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              Software Testing
            </h2>
            <p className=" mb-4 text-center">
              Learn essential software testing skills and knowledge including
              manual testing, automation testing, Selenium, JUnit, TestNG, and
              CI/CD tools to ensure the quality and reliability of code of
              software applications.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Digital Marketing */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./DIGITAL.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              Digital Marketing
            </h2>
            <p className=" mb-4 text-center">
              Learn SEO, SEM, Social Media Marketing, Content Marketing, a in
              the world of digital marketing. Develop strategies to boost online
              presence, drive traffic, enhance brand awareness, and maximize
              conversions for businesses.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Video Editing */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./EDITING.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              Video Editing
            </h2>
            <p className=" mb-4 text-center">
              Learn to edit stunning, professional-quality videos using tools
              like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve. Gain
              expertise in color grading, motion graphics, and visual effects to
              create impactful videos.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>
        {/* Graphic Designing */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./GraphicDesign.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              Graphic Designing
            </h2>
            <p className=" mb-4 text-center">
              Master Adobe Photoshop, Illustrator, and CorelDRAW to create
              designs for both print and digital media. Learn essential skills
              like typography, image manipulation, logo design, and branding.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>
        {/* WordPress */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./WORDPRESS.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              WordPress
            </h2>
            <p className=" mb-4 text-center">
              Learn how to create professional websites using WordPress. Master
              the art of customizing themes, integrating plugins, and leveraging
              advanced features to build dynamic, responsive websites like
              e-commorce.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>
        {/* English Speaking */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./ENGLISH.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              English Speaking
            </h2>
            <p className=" mb-4 text-center ">
              Enhance your spoken English skills with this comprehensive course.
              Focus on improving pronunciation, vocabulary, grammar, tenses, and
              conversational abilities. Gain the confidence to speak clearly and
              effectively in any situation.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>
        {/* CRT */}
        <SwiperSlide className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-white border-black border-2 ">
        <div className="w-full flex flex-col items-center">
            <img
              src="./CRT.webp" // Replace with actual image URL
              alt="Java Full Stack"
              className="w-full aspect-video object-cover rounded-lg mb-4"
              loading="lazy"

            />
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 text-center">
              Campus Recruitment Training (CRT)
            </h2>
            <p className="  mb-4 text-center">
              Prepare for campus recruitment with aptitude, reasoning, and
              interview preparation techniques. Build confidence and improve
              your chances of landing your job.
            </p>
            <Link to={"/course"}>
              <button
                className="bg-black text-white py-1 px-3 md:py-2 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
              >
                Learn More
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* More SwiperSlides for other courses here */}
      </Swiper>

      {/* Left and Right Navigation Arrows */}
      <div
        className={`swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 ${
          activeArrow === "prev" ? "bg-blue-500" : ""
        }`}
        onClick={() => handleArrowClick("prev")}
      >
        &lt;
      </div>
      <div
        className={`swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 ${
          activeArrow === "next" ? "bg-blue-500" : ""
        }`}
        onClick={() => handleArrowClick("next")}
      >
        &gt;
      </div>
    </div>
  );
};

export default ServiceSlider;
