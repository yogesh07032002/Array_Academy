import React, { useEffect, useState } from 'react';

const MetricCard = ({ title, value, suffix }) => (
  <div className="bg-orange-500 text-black p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="text-4xl font-bold mt-4">
      {value}
      {suffix}
    </p>
  </div>
);

function Metrics() {
  const [totalStudents, setTotalStudents] = useState(0);
  const [placementPercentage] = useState(70); // Static value
  const [studentSatisfactionRate] = useState(90); // Static value
  const [topRecruiters, setTopRecruiters] = useState(0);

  // Increment counter logic
  const incrementCounter = (target, setter) => {
    const step = Math.ceil(target / 100);
    let counter = 0;

    const interval = setInterval(() => {
      counter += step;
      if (counter >= target) {
        setter(target);
        clearInterval(interval);
      } else {
        setter(counter);
      }
    }, 20);
  };

  useEffect(() => {
    incrementCounter(5000, setTotalStudents); // Increment total students
    incrementCounter(300, setTopRecruiters);  // Increment top recruiters
  }, []);

  return (
    <section className="py-5 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-8">Our Achievements 🥳</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <MetricCard title="Total Students Trained" value={totalStudents} suffix="+" />
          <MetricCard title="Top Recruiters" value={topRecruiters} suffix="+" />
          <MetricCard title="Placement Percentage" value={placementPercentage} suffix="%" />
          <MetricCard title="Student Satisfaction Rate" value={studentSatisfactionRate} suffix="%" />
        </div>
      </div>
    </section>
  );
}

export default Metrics;
