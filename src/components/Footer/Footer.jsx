import React from "react";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/md-anis-molla-19515417b/",
      icon: IoLogoLinkedin,
      label: "LinkedIn",
      color: "hover:bg-[#0077B5]",
    },
    {
      href: "https://github.com/anichu",
      icon: IoLogoGithub,
      label: "GitHub",
      color: "hover:bg-[#333]",
    },
    {
      href: "https://twitter.com/MDAnisMolla3",
      icon: IoLogoTwitter,
      label: "Twitter",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      href: "https://www.facebook.com/mdanis.molla.750983/",
      icon: IoLogoFacebook,
      label: "Facebook",
      color: "hover:bg-[#1877F2]",
    },
    {
      href: "#",
      icon: IoLogoInstagram,
      label: "Instagram",
      color: "hover:bg-gradient-to-r hover:from-[#833AB4] hover:to-[#FD1D1D]",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0B1224] to-[#1a2332] border-t border-[#64C59A]/20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#64C59A] to-transparent"></div>

      <div className="container mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="text-center">
          {/* Brand/Name */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              MD Anis Molla
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Full Stack Developer
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#64C59A] to-[#4ade80] rounded-full mx-auto mt-3"></div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`
                    group relative w-12 h-12 bg-[#64C59A] rounded-full cursor-pointer 
                    transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1
                    ${social.color} hover:shadow-lg hover:shadow-[#64C59A]/30
                    before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                    before:from-[#64C59A] before:to-[#4ade80] before:opacity-0 
                    before:transition-opacity before:duration-300 hover:before:opacity-100
                  `}
                >
                  <IconComponent className="w-12 h-12 p-3 text-black group-hover:text-white transition-colors duration-300 relative z-10" />

                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                </a>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <a
                href="#about"
                className="hover:text-[#64C59A] transition-colors duration-300 text-sm"
              >
                About
              </a>
              <a
                href="#my-works"
                className="hover:text-[#64C59A] transition-colors duration-300 text-sm"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-[#64C59A] transition-colors duration-300 text-sm"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hover:text-[#64C59A] transition-colors duration-300 text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#64C59A]/30 to-transparent mb-6"></div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p className="mb-2">
              &copy; {currentYear} MD Anis Molla. All rights reserved.
            </p>
            <p className="text-xs">Built with ❤️ using React & Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#64C59A]/5 to-transparent pointer-events-none"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[#64C59A]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-[#64C59A]/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-[#64C59A]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-[#64C59A]/30 rounded-full animate-ping"></div>
      </div>
    </footer>
  );
};

export default Footer;
