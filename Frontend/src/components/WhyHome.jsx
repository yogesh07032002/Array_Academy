function WhyHome() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 bg-gray-100 gap-8">
      {/* Left Side - Why Us Content */}
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h3 className=" text-xl md:text-2xl font-bold text-orange-600 mb-3">
          Why The ArrayLogic Academy is the Best IT Courses Institute in Pune?
        </h3>
        <p className="text-black mb-3 text-sm">
          ArrayLogic Academy stands out as the top choice for IT training in
          Pune, offering unparalleled benefits to students and professionals
          alike:
        </p>
        <ul className="list-disc list-inside text-black space-y-2 text-sm">
          <li>
            <strong>Affordable Fees:</strong> We offer Online & Classroom
            Training for all the IT Courses with the lowest course prices.
          </li>
          <li>
            <strong>100% Job Assistance:</strong> After a dedicated training
            process, we offer placement opportunities to students.
          </li>
          <li>
            <strong>Industry Standard Certifications:</strong> Upon successful
            completion of the course, you will be awarded a certificate.
          </li>
          <li>
            <strong>Doubt Clearing Sessions:</strong> We provide a dedicated
            doubt-clearing session for every session conducted.
          </li>
          <li>
            <strong>Mock Interviews:</strong> We guarantee to give multiple
            calls to every student until they get placed.
          </li>
          <li>
            <strong>Industry Expert Trainers:</strong> We have dedicated
            full-time expert trainers.
          </li>
        </ul>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center p-6 bg-white rounded-lg shadow-lg">
        <img
          src="./WhyHome.webp" 
          alt="Why Us Illustration"
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default WhyHome;
