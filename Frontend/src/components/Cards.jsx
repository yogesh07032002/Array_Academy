import React from "react";

function Cards({ item }) {
  // Generate syllabus URL dynamically
  const generateSyllabusURL = (id) => {
    return `/syllabus/${id}-syllabus.pdf`; // Adjust the pattern to match your file naming convention
  };

  return (
    <div>
      <div className="mt-1 p-3 flex justify-center">
        <div className="card bg-gradient-to-r from-purple-700 via-indigo-800 to-black w-92 shadow-xl hover:scale-105 duration-200 text-white border border-black flex flex-col items-center p-0 rounded-lg">
          {/* Image Section */}
          <figure className="overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt={item.name} // Descriptive alt text for the image
              className="rounded-lg max-w-full h-auto hover:scale-110 transition-transform duration-500"
            />
          </figure>

          {/* Card Body */}
          <h2 className="card-title text-center text-white mt-3 pb-4 pt-2">
            {item.name}
            <p className="text-center">{item.title}</p>
          </h2>

          {/* Download Syllabus Button */}
          <div className="card-actions justify-center mt-2">
            <a
              href={generateSyllabusURL(item.id)} // Dynamically generate syllabus URL
              download // Enable download
              className="btn bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 mb-4"
            >
              Download Syllabus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
