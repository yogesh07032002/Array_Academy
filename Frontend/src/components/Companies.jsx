import React from "react";

const Companies = () => {
  const companies = [
    { name: "Accenture", logo: "/Accenture.png", color: "#2C2C2C" },
    { name: "TCS", logo: "/TCS.jpg", color: "#F0A000" },
    { name: "Infosys", logo: "/Infosys.png", color: "#009C8C" },
    { name: "Wipro", logo: "/Wipro.png", color: "#5F5A5A" },
    { name: "Zoho", logo: "/Zoho.png", color: "#0076D6" },
    { name: "Amazon", logo: "/Amazon.png", color: "#FF9900" },
    { name: "Google", logo: "/Google.png", color: "#4285F4" },
    { name: "Microsoft", logo: "/Microsoft.png", color: "#00A4EF" },
    { name: "Flipkart", logo: "/Flipkart.jpg", color: "#0055F5" },
    { name: "Salesforce", logo: "/Salesforce.png", color: "#00A1E0" },
    { name: "IBM", logo: "/IBM.png", color: "#006699" },
    { name: "SAP", logo: "/SAP.png", color: "#00A0B1" },
    { name: "HCL", logo: "/HCL.png", color: "#0064A3" },
    { name: "Tech Mahindra", logo: "/TechMahindra.png", color: "#A9A9A9" },
    { name: "SwiftNLift", logo: "/SwiftNLift.png", color: "#1D6F82" },
    { name: "PrimeTycoon", logo: "/Prime.jpg", color: "#1D6F82" },
    { name: "ArrayLogic", logo: "/ArrayLogo.jpg", color: "#1D6F82" },
    { name: "ArrayLogic", logo: "/ArrayLogo.jpg", color: "#1D6F82" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-5">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-900">
        Our Placement Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-t from-white to-transparent shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              border: `2px solid ${company.color}`,
              boxShadow: `0px 10px 15px rgba(0,0,0,0.1)`,
            }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-24 w-24 object-contain mb-4 transition-all duration-200 transform hover:scale-110"
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
