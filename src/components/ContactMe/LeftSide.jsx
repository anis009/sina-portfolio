import React from "react";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";

const LeftSide = () => {
  const contactInfo = [
    {
      icon: HiPhone,
      title: "Contact On Phone",
      value: "+880 01714802800",
      href: "tel:+8801714802800",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: HiOutlineMail,
      title: "Contact On Email",
      value: "md.anis.molla009@gmail.com",
      href: "mailto:md.anis.molla009@gmail.com",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: HiLocationMarker,
      title: "Contact Address",
      value: "Barishal, Bangladesh",
      href: "#",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="w-full lg:w-1/2">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Contact Information
        </h3>
        <p className="text-gray-400 text-base">
          Feel free to reach out through any of these channels
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              className="group bg-gradient-to-br from-[#0f1830] to-[#1a2332] border border-[#64C59A]/20 rounded-xl p-5 hover:border-[#64C59A]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#64C59A]/10 hover:-translate-y-1 block"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-base mb-1 group-hover:text-[#64C59A] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300 truncate">
                    {item.value}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-8 p-5 bg-gradient-to-r from-[#64C59A]/10 to-[#4ade80]/10 rounded-xl border border-[#64C59A]/20">
        <h4 className="text-white font-semibold text-lg mb-2">
          Let's Start a Conversation
        </h4>
        <p className="text-gray-400 text-sm">
          Available for freelance projects and full-time opportunities
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
