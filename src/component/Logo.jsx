import React from 'react'
import pic1 from '../assets/logo 1.png'
import pic2 from "../assets/logo 2.png"
import pic3 from "../assets/logo 3.png"
import pic4 from "../assets/logo 4.png"
import pic5 from "../assets/logo5.png"



const Logo = () => {
      const logos = [
    pic1,pic2 ,pic3 ,pic4 ,pic5 ];
  return (
    <section className="bg-[#1a253f] py-12  border-gray-300 w-full" >
        <div className="max-w-[1140px] mx-auto px-4">
            <div  className="brands__wrapper flex flex-wrap items-center justify-around gap-6">
                {logos.map((logo,index)=>(
                    <img key={index}
                    src={logo} 
                    alt={`Brand ${index + 1}`} className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition duration-300"/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Logo