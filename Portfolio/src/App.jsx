import React from "react";
import Nav from "./component/Nav"
import About from "./component/About";
import Profile from "./component/Profile";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Logo from "./component/logo";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen">
      <Nav />
      
      <Profile/>
      <About/>
      
      <Skill />
      <Work />
      <Logo />
      <Contact />
      <Footer />
      {/* Other sections like About, Skills will go below */}
    </div>
  );
}

export default App;
