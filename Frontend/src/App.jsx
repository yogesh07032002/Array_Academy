import { Route, Routes } from "react-router-dom";

import About from "./About/About.jsx";
import CSSNotes from "./components/ProgrammingNotes/CSSNotes.jsx";
import Career from "./components/Career.jsx";
import Contact from './components/Contact';
import Courses from './courses/Courses';
import HTMLNotes from "./components/HTMLNotes.jsx";
import { Helmet } from "react-helmet";
import Hiring from "./components/Hiring.jsx";
import Home from './home/Home.jsx';
import Intern from "./Internship/Intern.jsx";
import Internships from "./components/Internships.jsx";
import JSNotes from "./components/ProgrammingNotes/JSNotes.jsx";
import NotesAll from "./components/NotesAll.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Project from "./components/Project.jsx";
import TermsCondition from "./components/TermsCondition.jsx";
import { Toaster } from 'react-hot-toast';
import Why from "./Why/why.jsx";
import { useAuth } from './components/context/AuthProvider';

const App = () => {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Helmet>
        <title>ArrayLogic Academy | IT Training Institute in Pune</title>
        <meta
          name="description"
          content="ArrayLogic Academy offers industry-relevant IT training in Pune, providing courses in Java, MERN, Python, Data Science, Cloud Computing, and more. Join us to build your career in technology."
        />
        <meta
          name="keywords"
          content="IT training institute Pune, Java Full Stack, MERN Stack, Python Full Stack, Data Science, Cloud Computing, Machine Learning, AI, Software Development Courses, career development, internships, IT industry training"
        />
      </Helmet>

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/why" element={<Why />} />
          <Route path="/internship" element={<Intern />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/project" element={<Project />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms&conditons" element={<TermsCondition />} />
          <Route path="/notes" element={<NotesAll />} />
          <Route path="/html-notes" element={<HTMLNotes />} />
          <Route path="/css-notes" element={<CSSNotes />} />
          <Route path="/javascript-notes" element={<JSNotes />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
