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
	useEffect(() => {
		fetch("category.json")
			.then((res) => res.json())
			.then((data) => {
				setCategory(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const fetchProjects = (category) => {
		setActive(category);
		fetch("projects.json")
			.then((res) => res.json())
			.then((data) => {
				if (category === "all") {
					setProjects(data);
				} else {
					console.log(category);
					const filterProjectsByTechnologies = data.filter((project) =>
						project.technologies.includes(category)
					);
					const ids = filterProjectsByTechnologies.map((project) => project.id);
					const filterProjectsByType = data.filter(
						(project) =>
							project.type === category &&
							(ids ? !ids.includes(project.id) : true)
					);

					console.log(filterProjectsByType);

					const filteredProjects = [
						...filterProjectsByTechnologies,
						...filterProjectsByType,
					];
					console.log(filteredProjects);

					setProjects(filteredProjects);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchProjects("all");
	}, []);

	console.log(projects);

	return (
		<div className="pt-[70px] my-works" id="my-works">
			<h1 className="text-center my-works-header text-4xl capitalize text-[#64C59A] font-medium">
				My Works
			</h1>
			<div className="mt-10">
				<div className="tabs sm:mx-10 mx-10 flex flex-wrap justify-center tabs-boxed max-w-[800px] md:mx-auto">
					{category?.map((c) => {
						return (
							<h4
								href="#"
								key={c.id}
								onClick={() => fetchProjects(c.name)}
								className={`tab uppercase ${active === c.name && "tab-active"}`}
							>
								{c.name}
							</h4>
						);
					})}
				</div>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-10 gap-5 mx-10">
					{projects &&
						projects.map((project) => (
							<Card
								key={project.id}
								setShowProject={setShowProject}
								project={project}
							></Card>
						))}
				</div>
				<div>{showProject && <Modal showProject={showProject}></Modal>}</div>
			</div>
		</div>
	);
};

export default MyWorks;
