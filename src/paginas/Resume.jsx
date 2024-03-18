import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { studies, experiences } from "../data/resume";

function Resume() {
  const [studiesList, setStudiesList] = useState([]);
  const [experiencesList, setExperiencesList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStudiesList(studies);
      setExperiencesList(experiences);
    }, 1000);
  }, []);

  return (
    <>

      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>

        <li>
          <Link to={`/project`}>Project</Link>
        </li>
      </ul>



      <h1>RESUME</h1>
      <h2>Studies</h2>
      <ul>
        {studiesList.map((study) => (
          <li key={study.id}>
            <p>Título: {study.title}</p>
            <p>Institución: {study.institution}</p>
            <p>Fechas: {study.date}</p></li>
        ))}
      </ul>
      <h2>Experiences</h2>
      <ul>
        {experiencesList.map((experience) => (
          <li key={experience.id}>
            <p>Título: {experience.title}</p>
            <p>Compañía: {experience.company}</p> 
            <p>Fechas: {experience.date}</p></li>
        ))}
      </ul>
  

    </>
  );
}

export default Resume;
