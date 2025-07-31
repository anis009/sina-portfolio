import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetailsCarousel from "./ProjectDetailsCarousel";
import "./ProjectDetails.css";
import { useContext } from "react";
import { ProjectContext } from "../../Contexts/ProjectProvider";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { projects, loading } = useContext(ProjectContext);

  // Enhanced Skeleton Loader
  if (loading) {
    return (
      <div className="w-[90%] h-[100vh] m-auto pb-5">
        <br />
        <div className="animate-pulse mt-[30px] ">
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
      <div className="text-center text-gray-200">
        <h1 className="text-2xl">Project Not Found</h1>
        <p>Please check the project ID or try again later.</p>
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
    <div>
      <ProjectDetailsCarousel images={project?.images}></ProjectDetailsCarousel>
      <div className="w-[90%] m-auto pb-5">
        <h1 className="text-3xl text-[#64C59A]">{name}</h1>
        <div className="border-2 border-[#0f1830] pl-5 rounded-md mt-5 shadow-lg bg-[#0f1830]">
          <div>
            {descriptionArray &&
              descriptionArray.map((description, index) => (
                <p key={index} className="mt-3 text-base">
                  {description && <>--- {description}</>}
                </p>
              ))}
          </div>

          <p className="text-xl mt-5">
            <b>Live Site:</b>
            <a
              className="underline ml-5 text-blue-800"
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {liveSite}
            </a>
          </p>
          <div className="mb-5">
            {serverClient ? (
              <p className="text-xl mt-5">
                <b>Github Link:</b>
                <a
                  className="underline ml-5 text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={serverClient}
                >
                  {serverClient}
                </a>
              </p>
            ) : (
              <div>
                <p className="text-xl mt-5">
                  <b>Client:</b>
                  <a
                    className="underline ml-5 text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={client}
                  >
                    {client}
                  </a>
                </p>
                <p className="text-xl mt-5">
                  <b>Server:</b>
                  <a
                    className="underline ml-5 text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={server}
                  >
                    {server}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="pt-5">
          {technologies &&
            technologies.map((technology, idx) => (
              <span
                key={idx}
                className="inline-block bg-[#64C59A] rounded-full border-2 border-white px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"
              >
                {technology}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
