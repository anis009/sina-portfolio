import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Card = ({ project, setShowProject }) => {
	const { image, name, description, technologies, id } = project;
	console.log(project);
	return (
		<div className="sm:max-w-[300px] max-w-[400px] mx-auto rounded-lg bg-[#0F1830] shadow-lg">
			<img
				className="w-full rounded-lg h-[200px] "
				src={image}
				alt="Sunset in the mountains"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{name}</div>
				<p className="text-gray-700 text-base text-left break-all">
					{description.substring(0, 110)}
				</p>
			</div>
			<div className="pb-4 text-center">
				<Link
					className="flex items-center justify-center hover:text-[#64C59A] transition duration"
					to={`/project/${id}`}
					target="_blank"
				>
					<span>See details</span>
					<HiArrowSmRight className="w-6 h-6 text-base"></HiArrowSmRight>
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
