import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return(

<>
    <h1>PORTFOLIO</h1>
    <ul>

        <li>
          <Link to={`/project`}>Project</Link>
        </li>
        <li>
          <Link to={`/resume`}>Resume</Link>
        </li>
    
    </ul>
    <h2>Sobre mí</h2>
    <p>Hola, , una persona apasionada por el desarrollo de aplicaciones web. Durante los últimos años, me he dedicado a adquirir habilidades en este campo a través de una sólida formación educativa y experiencia laboral.

Comencé mi viaje educativo en el mundo del desarrollo de aplicaciones web con un curso en FOC, donde me sumergí en los fundamentos 
y las tecnologías clave necesarias para construir aplicaciones web modernas. Posteriormente, 
amplié mis conocimientos participando en un Bootcamp en The Bridge, 
donde consolidé mis habilidades y aprendí nuevas técnicas y herramientas.

Mi trayectoria laboral también refleja mi compromiso con este campo. Durante varios años, trabajé como Manager Recepcionist en 
The Stay Club London, donde desarrollé habilidades de gestión y organización, mientras mantenía un enfoque 
en la excelencia en el servicio al cliente. Más recientemente, 
he encontrado un nuevo desafío en el Departamento de Calidad en Monkeys Apartments,
 donde aplico mis habilidades técnicas y mi atención al detalle para garantizar la calidad en los productos y servicios ofrecidos.

En resumen, mi pasión por el desarrollo web y mi experiencia en gestión y calidad me han preparado para seguir creciendo y contribuyendo en este emocionante campo.</p>
  </>

  )
}

export default Home;
