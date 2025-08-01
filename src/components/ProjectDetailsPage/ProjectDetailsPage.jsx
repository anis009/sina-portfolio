import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  IoArrowBackOutline,
  IoOpenOutline,
  IoLogoGithub,
} from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import ProjectDetailsCarousel from "./ProjectDetailsCarousel";
import "./ProjectDetails.css";
import { useContext } from "react";
import { ProjectContext } from "../../Contexts/ProjectProvider";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, loading } = useContext(ProjectContext);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Enhanced Skeleton Loader
  if (loading) {
    return (
      <div className="w-[90%] h-[100vh] m-auto pb-5">
        <br />
        <div className="animate-pulse mt-[30px] ">
          {/* Back Button Placeholder */}
          <div className="h-10 bg-gray-700 rounded mb-6 w-32"></div>

          {/* Title Placeholder */}
          <div className="h-8 bg-gray-700 mt-5 rounded mb-6 w-1/3"></div>

          {/* Carousel Placeholder */}
          <div className="h-64 bg-gray-700 rounded mb-6"></div>

          {/* Description Placeholder */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-4/6"></div>
          </div>

          {/* Links Placeholder */}
          <div className="mt-6 space-y-3">
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-700 rounded w-1/3"></div>
          </div>

          {/* Technologies Placeholder */}
          <div className="mt-6 flex flex-wrap gap-2">
            <div className="h-6 w-20 bg-gray-700 rounded"></div>
            <div className="h-6 w-24 bg-gray-700 rounded"></div>
            <div className="h-6 w-16 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  // Find the project by ID
  const project = projects?.find((pr) => pr.id === Number(id));

  // Handle undefined project
  if (!project) {
    return (
      <div className="w-[90%] m-auto pb-5">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#64C59A] hover:text-white transition-colors duration-300 mb-6 mt-8"
        >
          <IoArrowBackOutline size={24} />
          <span className="text-lg font-medium">Back</span>
        </button>

        <div className="text-center text-gray-200">
          <h1 className="text-2xl">Project Not Found</h1>
          <p>Please check the project ID or try again later.</p>
        </div>
      </div>
    );
  }

  const {
    name,
    description,
    technologies,
    client,
    liveSite,
    serverClient,
    server,
  } = project;

  const descriptionArray = description?.split(".");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1224] to-[#1a2332]">
      <ProjectDetailsCarousel images={project?.images}></ProjectDetailsCarousel>

      <div className="w-[90%] max-w-6xl m-auto pb-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 text-[#64C59A] hover:text-white transition-all duration-300 mb-8 mt-8 group bg-[#0f1830] px-4 py-2 rounded-lg border border-[#64C59A]/20 hover:border-[#64C59A]/50 hover:bg-[#64C59A]/10"
        >
          <IoArrowBackOutline
            size={20}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span className="text-base font-medium">Back to Projects</span>
        </button>

        {/* Project Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#64C59A] mb-2">
            {name}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#64C59A] to-[#4ade80] rounded-full"></div>
        </div>

        {/* Main Content Container */}
        <div className="bg-gradient-to-br from-[#0f1830] to-[#1a2332] rounded-2xl shadow-2xl border border-[#64C59A]/10 overflow-hidden">
          {/* Description Section */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#64C59A] rounded-full"></div>
              Project Overview
            </h2>

            <div className="space-y-3 text-gray-300 leading-relaxed">
              {descriptionArray &&
                descriptionArray.map(
                  (desc, index) =>
                    desc.trim() && (
                      <p
                        key={index}
                        className="flex items-start gap-3 text-base"
                      >
                        <span className="w-2 h-2 bg-[#64C59A] rounded-full mt-2 flex-shrink-0"></span>
                        <span>{desc.trim()}</span>
                      </p>
                    )
                )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#64C59A]/30 to-transparent mx-8"></div>

          {/* Links Section */}
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#64C59A] rounded-full"></div>
              Project Links
            </h2>

            {/* Live Site */}
            <div className="flex items-center gap-4 p-4 bg-[#64C59A]/5 rounded-xl border border-[#64C59A]/20 hover:border-[#64C59A]/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#64C59A]/20 rounded-full flex items-center justify-center group-hover:bg-[#64C59A]/30 transition-all duration-300">
                <FiExternalLink className="text-[#64C59A] text-xl" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold mb-1">Live Demo</p>
                <a
                  className="text-[#64C59A] hover:text-white transition-colors duration-300 text-sm break-all"
                  href={liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {liveSite}
                </a>
              </div>
              <IoOpenOutline className="text-[#64C59A] text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* GitHub Links */}
            {serverClient ? (
              <div className="flex items-center gap-4 p-4 bg-[#64C59A]/5 rounded-xl border border-[#64C59A]/20 hover:border-[#64C59A]/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#64C59A]/20 rounded-full flex items-center justify-center group-hover:bg-[#64C59A]/30 transition-all duration-300">
                  <IoLogoGithub className="text-[#64C59A] text-xl" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold mb-1">Source Code</p>
                  <a
                    className="text-[#64C59A] hover:text-white transition-colors duration-300 text-sm break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={serverClient}
                  >
                    {serverClient}
                  </a>
                </div>
                <IoOpenOutline className="text-[#64C59A] text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : (
              <div className="space-y-4">
                {/* Client Repository */}
                <div className="flex items-center gap-4 p-4 bg-[#64C59A]/5 rounded-xl border border-[#64C59A]/20 hover:border-[#64C59A]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#64C59A]/20 rounded-full flex items-center justify-center group-hover:bg-[#64C59A]/30 transition-all duration-300">
                    <IoLogoGithub className="text-[#64C59A] text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold mb-1">
                      Frontend Repository
                    </p>
                    <a
                      className="text-[#64C59A] hover:text-white transition-colors duration-300 text-sm break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={client}
                    >
                      {client}
                    </a>
                  </div>
                  <IoOpenOutline className="text-[#64C59A] text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Server Repository */}
                <div className="flex items-center gap-4 p-4 bg-[#64C59A]/5 rounded-xl border border-[#64C59A]/20 hover:border-[#64C59A]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#64C59A]/20 rounded-full flex items-center justify-center group-hover:bg-[#64C59A]/30 transition-all duration-300">
                    <IoLogoGithub className="text-[#64C59A] text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold mb-1">
                      Backend Repository
                    </p>
                    <a
                      className="text-[#64C59A] hover:text-white transition-colors duration-300 text-sm break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={server}
                    >
                      {server}
                    </a>
                  </div>
                  <IoOpenOutline className="text-[#64C59A] text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technologies Section */}
        {technologies && technologies.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-[#64C59A] rounded-full"></div>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((technology, idx) => (
                <span
                  key={idx}
                  className="inline-flex capitalize items-center bg-gradient-to-r from-[#64C59A] to-[#4ade80] text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
