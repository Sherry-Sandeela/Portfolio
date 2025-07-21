import React from "react";
import Nav from "./component/Nav"
import About from "./component/About";
import Profile from "./component/Profile";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Logo from "./component/logo";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Remarks from "./component/Remarks";


function App() {
  return (
    <div className="bg-[#283353] min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 ">
        <div className="mt-8">
      <Profile/>
      </div>
      <About/>
      
      <Skill />
      {/* <Remarks /> */}
      <Work />
      <Logo />
      <Contact />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
