import React,{useState,useRef} from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const[formData, setFormData]=useState({
    name:"",
    email:"",
    message:"",

  });
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
  };
  const handleSubmit =(e)=>{
e.preventDefault();
emailjs.sendForm(
  "service_twgvwdu",
  "template_1epquow",
  form.current,
  "CIE9kzf4z2EgyqAt0"
)
.then(
  (result) => {
    console.log("Email successfully sent!", result.text);
    alert(" Message sent successfully!")
    setFormData({ name: "", email: "", message: "" });
  },
  (error) => {
    console.log("Email sending failed:", error.text);
  }
);
  }
  return (
    <section
      className="contact bg-[#1a253f] text-white py-12 px-6"
      id="contact"
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <h1 className="relative inline-block text-[16px] font-semibold  text-[#eff2f9] mb-12 section__heading">
          Contact Me:
          <span className="absolute left-0 bottom-[-3px] w-[70px] h-[3px] border-2 border-dashed border-[#7081b9]" />
        </h1>

        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
          {/* Left Contact Info */}
          <div className="left flex-1 space-y-8">
            <div className="flex items-start gap-4">
              <i className="fa fa-phone text-3xl text-[#4d79fc]"></i>
              <div>
                <h4 className="font-semibold">Free Call To Me:</h4>
                <p className="text-gray-300">03170707926</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fa fa-envelope text-3xl text-[#4d79fc]"></i>
              <div>
                <h4 className="font-semibold">Mail Me:</h4>
                <p className="text-gray-300">msherazmohsin@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fa fa-map-marker text-3xl text-[#4d79fc]"></i>
              <div>
                <h4 className="font-semibold">Find Me:</h4>
                <p className="text-gray-300">Mianwali</p>
              </div>
            </div>
          </div>
          {/* Right Contact Form */}
          <div className="right flex-1">
            <form ref={form} onSubmit={handleSubmit}
            className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                     name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                    className="w-full border border-[#28365f] bg-[#151A33] rounded p-2 text-white placeholder-gray-400 focus:border-[#4d79fc] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                   type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                    className="w-full border border-[#28365f] bg-[#151A33] rounded p-2 text-white placeholder-gray-400 focus:border-[#4d79fc] outline-none"
                  required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
                  className="w-full border border-[#28365f] bg-[#151A33] rounded p-2 text-white placeholder-gray-400 focus:border-[#4d79fc] outline-none"
                required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
