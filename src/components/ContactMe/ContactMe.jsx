import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="pt-[80px] sm:mx-10 mx-5 mb-5 relative" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#64C59A]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#4ade80]/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#64C59A] mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I&apos;d love
          to hear from you. Let&apos;s create something amazing together!
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-[#64C59A] to-[#4ade80] rounded-full mx-auto mt-6"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10 lg:gap-16 relative z-10">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default ContactMe;
