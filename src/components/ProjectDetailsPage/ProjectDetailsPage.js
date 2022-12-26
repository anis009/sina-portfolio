import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetailsCarousel from "./ProjectDetailsCarousel";
import "./ProjectDetails.css";
import { useContext } from "react";
import { ProjectContext } from "../../Contexts/ProjectProvider";

const ProjectDetailsPage = () => {
	const { id } = useParams();
	const { projects } = useContext(ProjectContext);
	// console.log(id);
	const project = projects.find((pr) => {
		return pr.id === Number(id);
	});
	const {
		name,
		description,
		technologies,
		client,
		liveSite,
		serverClient,
		server,
	} = project;
	const descriptionArray = description.split(".");
	console.log(descriptionArray);
	return (
		<div>
			<ProjectDetailsCarousel images={project?.images}></ProjectDetailsCarousel>
			<div className="w-[90%]  m-auto pb-5">
				<h1 className="text-3xl text-[#64C59A]">{name}</h1>
				<div className="border-2 border-[#0f1830] pl-5 rounded-md mt-5  shadow-lg bg-[#0f1830]">
					<div>
						{descriptionArray &&
							descriptionArray.map((description, index) => {
								return (
									<p key={index} className="mt-3 text-base">
										{description && <>--- {description}</>}
									</p>
								);
							})}
					</div>

					<p className="text-xl mt-5">
						<b>Live Site:</b>
						<a className="underline ml-5 text-blue-800 " href={liveSite}>
							{liveSite}
						</a>
					</p>
					<div className="mb-5">
						{serverClient ? (
							<p className="text-xl mt-5">
								<b>Github Link:</b>
								<a
									className="underline ml-5 text-blue-800 "
									target="_blank"
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
										className="underline ml-5 text-blue-800 "
										target="_blank"
										href={client}
									>
										{client}
									</a>
								</p>
								<p className="text-xl mt-5">
									<b>Server:</b>
									<a
										className="underline ml-5 text-blue-800 "
										target="_blank"
										href={server}
									>
										{server}
									</a>
								</p>
							</div>
						)}
					</div>
				</div>
				<div className=" pt-5">
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
