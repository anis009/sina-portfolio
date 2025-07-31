import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";
import "./MyWorks.css";

const MyWorks = () => {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState([]);
  const [showProject, setShowProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchProjects = (category) => {
    setActive(category);
    setIsLoading(true);

    // Add a small delay to show the animation
    setTimeout(() => {
      fetch("projects.json")
        .then((res) => res.json())
        .then((data) => {
          if (category === "all") {
            setProjects(data);
          } else {
            const filterProjectsByTechnologies = data.filter((project) =>
              project.technologies.includes(category)
            );
            const ids = filterProjectsByTechnologies.map(
              (project) => project.id
            );
            const filterProjectsByType = data.filter(
              (project) =>
                project.type === category &&
                (ids ? !ids.includes(project.id) : true)
            );

            const filteredProjects = [
              ...filterProjectsByTechnologies,
              ...filterProjectsByType,
            ];

            setProjects(filteredProjects);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }, 300);
  };

  useEffect(() => {
    fetchProjects("all");
  }, []);

  return (
    <div className="pt-[70px] my-works" id="my-works">
      <h1 className="text-center my-works-header text-4xl capitalize text-[#64C59A] font-medium">
        My Works
      </h1>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-10 max-w-4xl mx-auto mb-10">
          {category?.map((c) => {
            return (
              <button
                key={c.id}
                onClick={() => fetchProjects(c.name)}
                className={`
                  relative px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wide
                  transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1
                  border-2 backdrop-blur-sm
                  ${
                    active === c.name
                      ? "bg-gradient-to-r from-[#64C59A] to-[#4ade80] text-black border-[#64C59A] shadow-lg shadow-[#64C59A]/30"
                      : "bg-[#0f1830]/80 text-gray-300 border-[#64C59A]/30 hover:border-[#64C59A]/60 hover:bg-[#64C59A]/10 hover:text-white"
                  }
                  before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#64C59A] before:to-[#4ade80] 
                  before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10
                  active:scale-95 min-w-[80px] sm:min-w-[100px]
                `}
              >
                <span className="relative z-10">{c.name}</span>
                {active === c.name && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64C59A] to-[#4ade80] animate-pulse opacity-20"></div>
                )}
              </button>
            );
          })}
        </div>

        <div
          className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-10 gap-5 mx-10 transition-all duration-500 ${
            isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {projects &&
            projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <Card setShowProject={setShowProject} project={project} />
              </div>
            ))}
        </div>

        <div>{showProject && <Modal showProject={showProject}></Modal>}</div>
      </div>
    </div>
  );
};

export default MyWorks;
