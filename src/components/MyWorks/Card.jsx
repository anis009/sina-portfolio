import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getLimitText } from "../../utils/common";

const Card = ({ project, setShowProject }) => {
  const { image, name, description, technologies, id } = project;

  return (
    <div className="sm:max-w-[300px] max-w-[400px] mx-auto rounded-lg bg-[#0F1830] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#64C59A]/10 hover:border-[#64C59A]/30">
      <img
        className="w-full rounded-t-lg h-[200px] object-cover"
        src={image}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize text-white">
          {name}
        </div>
        <p className="text-base text-gray-300 text-left mb-4">
          {getLimitText(description, 60)}
        </p>

        {/* Technologies Section */}
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="inline-block capitalize bg-[#64C59A]/20 text-[#64C59A] px-2 py-1 rounded-full text-xs font-medium border border-[#64C59A]/30"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="inline-block bg-[#64C59A]/10 text-[#64C59A] px-2 py-1 rounded-full text-xs font-medium border border-[#64C59A]/20">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="pb-4 px-6">
        <Link
          className="flex items-center text-white justify-center hover:text-[#64C59A] transition-all duration-300 group bg-[#64C59A]/10 hover:bg-[#64C59A]/20 px-4 py-2 rounded-lg border border-[#64C59A]/30 hover:border-[#64C59A]/50"
          to={`/project/${id}`}
        >
          <span className="font-medium">See details</span>
          <HiArrowSmRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"></HiArrowSmRight>
        </Link>
      </div>
    </div>
  );
};

export default Card;

// // 	<label
// htmlFor="my-modal-3"
// onClick={() => setShowProject(project)}
// className="cursor-pointer"
// >

// 		</label>
