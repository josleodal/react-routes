import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './paginas/Home';
import Project from './paginas/Project';
import Resume from './paginas/Resume';


function App(){
return(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    </Router>




)


}


export default App;