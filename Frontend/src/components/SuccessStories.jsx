import React from "react";

const SuccessStories = () => {
  const students = [
    {
      name: "Prachi Tantarpale",
      college: "Amravati University",
      domain: "Web Developer Intern",
    
    },
    {
      name: "Pallavi Khond",
      college: "Amravati University",
      domain: "Web Developer Intern",
  
    },
    {
      name: "Nikita Pechkade",
      college: "Amravati University",
      domain: "Full Stack Web Developer Intern",
   
    },
    {
      name: "Ankita Gulde",
      college: "Amravati University",
      domain: "Web Developer Intern",
 
    },
    {
      name: "Dhanashri Tayde",
      college: "Amravati University",
      domain: "Web Developer Intern",
    
    },
    {
      name: "Unnati Tidke",
      college: "Amravati University",
      domain: "Web Developer Intern",
     
    },
    {
      name: "Jayashri Tayde",
      college: "Amravati University",
      domain: "Web Developer Intern",
    },
    {
      name: "Samruddhi Raybole",
      college: "Amravati University",
      domain: "Web Developer Intern",
    },
  ];

  return (
    <>

    <div className="max-w-screen-xl mx-auto py-10 px-6">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Success Stories & Case Studies
      </h2>
      <p className="text-center text-base md:text-lg text-gray-700 mb-10">
        Explore the incredible journeys of our students who have excelled in their internship roles across various domains.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200"
          >
            <div className="relative w-24 h-24 mx-auto mb-4">
              {student.image ? (
                <img
                  src={student.image}
                  alt={`${student.name}'s profile`}
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {student.name}
            </h3>
            <p className="text-center text-gray-600 mb-1">{student.college}</p>
            <p className="text-center text-gray-500 text-sm">
              {student.domain}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SuccessStories;
