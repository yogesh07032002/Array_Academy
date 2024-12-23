import React, { useEffect, useState } from "react";

import Cards from "../components/Cards";
import CourseImg from "../../public/CourseIMG.webp";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// import axios from "axios";

const Course = () => {
  // const [book, setBook] = useState([]);

  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4001/book");
  //       console.log(res.data);
  //       setBook(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await fetch("/bookStore.books.json"); // Fetch the JSON file
        const data = await res.json(); // Parse the JSON data
        console.log(data);
        setBook(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getBook();
  }, []);

  const coursesSection = [
    {
      id: 1,
      name: "Java Full Stack",

      image: "JavaTrainding.webp",
      syllabus: "/syllabus/java-full-stack.pdf",
    },
    {
      id: 2,
      name: "Python Full Stack",

      image: "PythonTrending.webp",
      syllabus: "/syllabus/python-full-stack.pdf",
    },
    {
      id: 3,
      name: "MERN Stack",

      image: "MERNTrainding.webp",
      syllabus: "/syllabus/mern-stack.pdf",
    },
    {
      id: 4,
      name: "Digital Marketing",
      image: "DMTrainding.webp",
      syllabus: "/syllabus/digital-marketing.pdf",
    },
  ];

  return (
    <>
   <Helmet>
        <title>IT Courses | ArrayLogic Academy - Premier IT Training Institute in Pune</title>
        <meta
          name="description"
          content="ArrayLogic Academy offers a diverse range of industry-relevant IT courses in Pune. Learn Java Full Stack, MERN Stack, MEAN Stack, Python Full Stack, Data Science, Cloud Computing, Machine Learning, Artificial Intelligence, and more from experienced instructors to enhance your career in technology. Our training programs are designed to give you hands-on experience and skills that employers demand."
        />
        <meta
          name="keywords"
          content="IT courses in Pune, ArrayLogic Academy Pune, Java Full Stack training, MERN Stack courses, MEAN Stack training, Python Full Stack courses, Data Science courses, Machine Learning courses, AI training, Cloud Computing classes, software development courses, technology career training, professional IT certification, coding bootcamp Pune, best IT institute Pune, job-ready IT courses, career-oriented IT training"
        />
      </Helmet>

    <div className="mt-14">
      <img
            src={CourseImg}
            alt="Image Coomin Soon"
          ></img>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-18 px-3">
        {/* Header Section */}
        <div className="mt-3 md:mt-5 text-center space-y-4">
          <h1 className="text-xl font-extrabold text-red-600 md:text-4xl">
            Shape Your Future with ArrayLogic Academy's In-Demand Software
            Courses
          </h1>
          <h1 className=" text-sm md:text-lg text-black text-left mt-0 md:mt-2 px-2 md:px-10">
            Welcome to ArrayLogic Academy, your destination for Software Courses
            and IT Training Programs! Whether you're a beginner ready to
            kickstart your tech career or an experienced professional aiming to
            upgrade your skills, we offer the Best IT Job-Oriented Courses in
            Java Full Stack, MERN, MEAN, Python Full Stack, Cloud Computing,
            Data Science, Machine Learning, Artificial Intelligence, and AWS.
            Our industry-leading Software Programs feature hands-on training to
            keep you ahead in the rapidly evolving tech landscape, equipping you
            with the knowledge and skills that top employers demand! "Launch
            your career with ArrayLogic Academy's job-ready Software Courses!"
          </h1>
          <h1 className="mt-4 text-xl md:text-2xl text-black">
            Launch your career with ArrayLogic Academy's job-ready Software
            Courses!
          </h1>

          <Link to={"/"}>
            <button className="mt-5 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Back
            </button>
          </Link>
        </div>

        {/* Course Cards Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <hr className="border-t-4 border-black font-extrabold mt-5" />

        <div className="container mx-auto px-1 md:px-6 py-8">
          <h2 className="text-xl md:text-4xl font-bold text-center mb-3  text-red-500">
            ArrayLogic Academy IT Training Institute: Trending Software Courses
          </h2>
          <h2 className=" md:px-8 px-1 text-sm md:text-lg  mb-8">
            At ArrayLogic Academy IT Courses Institute, we are dedicated to
            training students from diverse backgrounds, making it easier for
            them to learn and thrive in the IT industry. Our mission is to
            create a future where anyone passionate about software development
            can pursue a career in IT. We offer the Trending Software Courses
            and Software Programs that are designed to be accessible,
            high-quality, and industry-relevant, breaking down barriers to
            entry. In our supportive and dynamic environment, we encourage
            honesty, hard work, and innovation. Our experienced trainers don’t
            just teach the basics—they empower students with practical skills
            they can apply in real jobs. Our goal goes beyond teaching; we are
            committed to helping students shape their futures and succeed with
            Best IT Job-Oriented Courses, ensuring they are well-prepared for
            the digital world.{" "}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {coursesSection.map((course) => (
              <div
                key={course.id}
                className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 text-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
              >
                {/* Image Section */}
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover border-b-4 border-black shadow-lg hover:opacity-80 transition-all duration-300"
                />
                {/* Content Section */}
                <div className="p-5 space-y-4">
                  <h3 className="text-2xl font-semibold text-center">
                    {course.name}
                  </h3>
                  <p className="text-sm text-black text-center mt-2">
                    {course.description}
                  </p>
                  <div className="flex justify-center mt-4">
                    <a
                      href={course.syllabus}
                      download
                      className="bg-orange-500 text-white px-2 py-2 rounded-lg shadow-md text-sm  hover:bg-teal-400 transform transition duration-300"
                    >
                      Download Syllabus
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Text Section Below Cards */}
        <div className="mt-2 md:mt-5 text-center space-y-4">
          <h3 className="text-xl md:text-3xl font-bold text-red-500">
            Learn Software Courses different Programing Languages from the
            Expert IT Trainers
          </h3>
          <h3 className="text-sm md:text-lg text-left text-black px-2 md:px-8">
            At ArrayLogic Academy, you can learn Software Courses in various
            programming languages from expert IT trainers. Our comprehensive
            curriculum covers popular languages and technologies like Java,
            Python, JavaScript, C++, PHP, and SQL, ensuring that you gain a
            strong foundation in both front-end and back-end development.
            Whether you're interested in Full Stack Development, Data Science,
            Machine Learning, or AI, our trainers provide hands-on training to
            help you master these in-demand skills. With industry-relevant
            content and real-world applications, our Software Programs prepare
            you for success in today’s competitive IT job market.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Course;
