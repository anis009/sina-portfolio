import React from "react";
import { HiCalendar, HiOfficeBuilding, HiLocationMarker } from "react-icons/hi";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Software Engineer",
      company: "Scan Roster",
      location: "Remote",
      duration: "May 2025 - Present",
      type: "Full-time",
      description:
        "Working as a full-stack developer building scalable web applications using modern technologies. Responsible for developing user-friendly interfaces and robust backend systems.",
      technologies: [
        "React",
        "Node.js",
        "JavaScript",
        "MongoDB",
        "Express.js",
        "Typescript",
        "Nextjs",
      ],
      achievements: [
        "Developing scalable web applications",
        "Working with modern tech stack",
        "Contributing to full-stack development",
      ],
    },
    {
      id: 2,
      position: "Software Engineer",
      company: "D-SAi",
      location: "Remote",
      duration: "Oct 2024 - Apr 2025",
      type: "Full-time",
      description:
        "Worked as a software engineer developing innovative solutions and contributing to various projects using cutting-edge technologies.",
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Typescript",
      ],
      achievements: [
        "Contributed to multiple projects",
        "Developed innovative solutions",
        "Worked with diverse tech stack",
      ],
    },
    {
      id: 3,
      position: "Software Engineer",
      company: "PNC Soft Tech",
      location: "Remote",
      duration: "May 2025 - Present",
      type: "Part-time",
      description:
        "Working on multiple part-time projects, contributing to different software solutions and gaining experience across various domains.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      achievements: [
        "Successfully managed multiple projects",
        "Delivered quality solutions",
        "Enhanced skill set across technologies",
      ],
    },
    {
      id: 4,
      position: "Software Engineer",
      company: "Contractual Work",
      location: "Remote",
      duration: "Oct 2024 - Apr 2025",
      type: "Contract",
      description:
        "Worked on various contract projects, delivering full-stack solutions and maintaining high code quality standards.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      achievements: [
        "Completed 7+ months of contract work",
        "Delivered projects on time",
        "Maintained high code quality",
      ],
    },
    {
      id: 5,
      position: "Software Engineer",
      company: "PNC Soft Tech",
      location: "Barisal District, Barisal, Bangladesh",
      duration: "Oct 2024 - Present",
      type: "Part-time",
      description:
        "Working on-site at PNC Soft Tech, developing matrimonial platform PNC Nikah and other software solutions for local businesses.",
      technologies: [
        "React",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Firebase",
        "JWT",
        "Tailwind CSS",
      ],
      achievements: [
        "Developed PNC Nikah matrimonial platform",
        "Built scalable web applications",
        "Implemented secure authentication systems",
      ],
    },
    {
      id: 6,
      position: "Software Engineer",
      company: "Freelance",
      location: "Barisal District, Barisal, Bangladesh",
      duration: "Jul 2023 - Oct 2024",
      type: "Contract",
      description:
        "Worked as a freelance software engineer for 1 year and 4 months, developing various web applications and providing technical solutions to clients.",
      technologies: [
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "MongoDB",
      ],
      achievements: [
        "Successfully completed freelance projects",
        "Built client relationships",
        "Delivered custom software solutions",
        "Gained experience in PHP development",
      ],
    },
  ];

  const getTechIcon = (tech) => {
    const icons = {
      React: <FaReact className="text-blue-500" />,
      "Node.js": <FaNodeJs className="text-green-500" />,
      MongoDB: <SiMongodb className="text-green-600" />,
      "Express.js": <SiExpress className="text-gray-600" />,
      JavaScript: <FaJs className="text-yellow-500" />,
      Typescript: <SiTypescript className="text-blue-500" />,
      Nextjs: <SiNextdotjs className="text-white" />,
      "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
      HTML: <FaHtml5 className="text-orange-500" />,
      CSS: <FaCss3Alt className="text-blue-500" />,
      Bootstrap: <FaBootstrap className="text-purple-500" />,
      Firebase: <SiFirebase className="text-orange-400" />,
      JWT: <span className="text-[#64C59A] font-bold text-xs">JWT</span>,
      PHP: <span className="text-indigo-500 font-bold text-xs">PHP</span>,
    };
    return icons[tech] || <span className="text-[#64C59A]">•</span>;
  };

  return (
    <div
      className="pt-[60px] sm:pt-[80px] px-4 sm:px-6 lg:px-10 relative"
      id="experience"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-[#64C59A]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#4ade80]/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#64C59A] mb-3 sm:mb-4">
          Work Experience
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
          My professional journey and the experiences that shaped my expertise
          in full-stack development
        </p>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#64C59A] to-[#4ade80] rounded-full mx-auto mt-4 sm:mt-6"></div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto">
        {/* Timeline line - Hidden on mobile, visible on md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#64C59A] via-[#4ade80] to-[#64C59A] rounded-full"></div>

        {/* Mobile timeline line */}
        <div className="block md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#64C59A] via-[#4ade80] to-[#64C59A] rounded-full"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative mb-8 sm:mb-12 ${
              // Desktop alternating layout
              index % 2 === 0
                ? "md:flex md:flex-row"
                : "md:flex md:flex-row-reverse"
            } md:gap-16`}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#64C59A] rounded-full border-2 sm:border-4 border-[#0B1224] shadow-lg z-10 top-4"></div>

            {/* Content */}
            <div
              className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              <div className="bg-gradient-to-br from-[#0f1830] to-[#1a2332] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#64C59A]/20 shadow-xl sm:shadow-2xl hover:shadow-[#64C59A]/10 transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[#64C59A] text-xs sm:text-sm mb-2">
                    <div className="flex items-center gap-1">
                      <HiCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="w-fit px-2 py-1 bg-[#64C59A]/20 rounded-full text-xs">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                      <HiOfficeBuilding className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="truncate">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiLocationMarker className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-white font-semibold text-xs sm:text-sm mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 bg-[#64C59A]/20 text-[#64C59A] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium border border-[#64C59A]/30"
                      >
                        <span className="text-xs">{getTechIcon(tech)}</span>
                        <span className="text-xs">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-300 text-xs"
                      >
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#64C59A] rounded-full mt-1.5 flex-shrink-0"></span>
                        <span className="text-xs leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Empty space for desktop alternating layout */}
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 sm:mt-16 relative z-10">
        <div className="bg-gradient-to-r from-[#64C59A]/10 to-[#4ade80]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#64C59A]/20 max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Ready to Work Together?
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            I'm always open to discussing new opportunities and exciting
            projects
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-[#64C59A] to-[#4ade80] text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-[#64C59A]/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
