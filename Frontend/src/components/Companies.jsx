import React from "react";
import companies from "./CompaniesData";

const Companies = () => {

  return (
    <div className="max-w-screen-xl mx-auto py-6 md:py-12 px-4 md:px-0 mb-0">
      <h3 className="text-center text-xl md:text-3xl font-bold mb-4 md:mb-8 text-black">
        Best IT Training & Courses Institute in Pune with Placement Assistance
      </h3>
      <h3 className="text-center text-xl md:text-3xl font-bold mb-5 md:mb-8 text-red-500">
        Our Placement Partners
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center p-2 rounded-lg bg-gradient-to-t from-white to-transparent shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              border: `2px solid ${company.color}`,
              boxShadow: `0px 10px 15px rgba(0,0,0,0.1)`,
            }}
          >
            <img
              src={company.logo}
              alt={`Logo of ${company.name}`}
              onError={(e) => e.target.src = "/default-logo.webp"} // Fallback logo in case of error
              className="h-24 w-24 object-contain mb-0 transition-all duration-200 transform hover:scale-110"
              loading="lazy"
            />
            <p
              className="text-lg font-semibold text-center"
              style={{
                color: company.color,
                textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              {company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
