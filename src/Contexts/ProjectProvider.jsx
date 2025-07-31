import React from "react";
import projects from "../data/projects.json";
import { createContext } from "react";
export const ProjectContext = createContext();
const ProjectProvider = ({ children }) => {
	const projectsInfo = {
		projects,
	};
	return (
		<ProjectContext.Provider value={projectsInfo}>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectProvider;
