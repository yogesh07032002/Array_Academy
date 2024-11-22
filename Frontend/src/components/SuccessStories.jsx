import React from "react";

const SuccessStories = () => {
  const students = [
    {
      name: "Prachi Tantarpale",
      college: "Amravati University",
      domain: "Web Developer Intern",
      image: "",
    },
    {
      name: "Pallavi Khond",
      college: "Amravati University",
      domain: "Web Developer Intern",
      image: "",
    },
    {
      name: "Nikita Pechkade",
      college: "Amravati University",
      domain: "Full Stack Web Developer Intern",
      image: "",
    },
    {
      name: "Ankita Gulde",
      college: "Amravati University",
      domain: "Web Developer Intern",
      image: "",
    },
    {
      name: "Dhanashri Tayde",
      college: "Amravati University",
      domain: "Web Developer Intern",
      image: "",
    },
    {
      name: "Unnati Tidke",
      college: "Amravati University",
      domain: "Web Developer Intern",
      image: "",
    },
    {
      name: "Jayashri Tayde",
      college: "Amravati University",
      domain: "Web Developer Intern",
      image: "",
    },
    {
      name: "Samruddhi Raybole",
      college: "Amravati University",
      domain: "Web Developer Intern",
      image: "",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-6">
      <h2 className="text-center text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Success Stories & Case Studies
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        Check out the amazing journeys of our students who completed internships in various domains.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-black"
          >
            <div className="relative w-24 h-24 mx-auto mb-4">
              {student.image ? (
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {student.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">
              {student.name}
            </h3>
            <p className="text-center text-gray-500 mb-2">{student.college}</p>
            <p className="text-center text-gray-600 text-sm">{student.domain}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
