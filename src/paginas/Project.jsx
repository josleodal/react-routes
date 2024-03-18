import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

function Project (){

 const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
    
      setProyectos(projects);
    }, 1000);
  }, []);

  return (
    <>

      <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>

            <li>
            <Link to={`/resume`}>Resume</Link>
            </li>
      </ul>


      <h1>PROJECTS</h1>
      <ul>
        {proyectos.map((proyecto) => (
          <li key={proyecto.id}>
           <p>Name: {proyecto.name}</p><p>Descripción: {proyecto.description}</p><image src={proyecto.image}><p>Url:<a href={proyecto.url}>Enlace</a> </p></image>
          </li>
        ))}
      </ul>
   
    </>
  );








}
export default Project;