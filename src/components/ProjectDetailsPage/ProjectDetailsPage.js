import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetailsPage = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<div>
			<h1>anis</h1>
		</div>
	);
};

export default ProjectDetailsPage;
