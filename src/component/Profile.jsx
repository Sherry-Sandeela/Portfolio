import React, { } from "react";
import profilepic from "../assets/pic.jpg";
import * as THREE from "three";


const Profile = () => {
   

  return (
    <div >
    <section  className="bg-[#060b1b] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 mt-16 clip-profile">
      {/* Left Side - profile and Info */}
      {/* <Animation /> */}
      <div className="flex items-center md:flex-row flex-col md:items-start">
        <div className="relative md:mr-8 mb-6 md:mb-0">
        <img src={profilepic} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-[#4d79fc]" />
        {/* profile ky uper comment ka icon */}
         <span
  onClick={() => window.open("https://wa.me/923170707926", "_blank")}
  className="absolute right-0 bottom-0 w-8 h-8 bg-[#4d79fc] rounded-full flex items-center justify-center text-white text-sm shadow-md cursor-pointer"
>
  <i className="fa fa-commenting-o" aria-hidden="true"></i>
</span>
          </div>
       
  <div className="text-center md:text-left">
    <h2 className="mt-4 text-xl font-semibold text-[#7081b9]">Sherry Sandeela</h2>
    <p className="mt-1 text-sm text-[#8997db]">Full Stack Developer</p>
  </div>
      </div>
      {/* Right Side - Contact and Socials */}
      <div className="text-center md:text-right mt-8 md:mt-0">
        <ul className="text-sm text-[#848db3] space-y-1">
          <li>
            <i className="fa fa-phone mr-2" aria-hidden="true"></i>
            <strong>Phone:</strong> 03170707926
          </li>
          <li>
            <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
            <strong>Email:</strong> msherazmohsin@gmail.com
          </li>
        </ul>

        <div className="flex justify-center md:justify-end space-x-4 mt-4">
          <a href="https://www.facebook.com" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#2b55cc] text-white">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#ff5da0] text-white">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://twitter.com" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#4ac7ce] text-white">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Profile;
