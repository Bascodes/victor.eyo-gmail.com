import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Description from "./Description";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
function App(){
    return (
    <div> 
        <Header />
        <Description />
        <Skills />
        <Projects />
        <Contact />
        </div>
    );
}

export default App;