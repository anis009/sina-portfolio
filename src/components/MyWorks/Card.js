import React from "react";

const Card = ({ project, setShowProject }) => {
	const { image, name, description, technologies } = project;
	console.log(project);
	return (
		<label
			htmlFor="my-modal-3"
			onClick={() => setShowProject(project)}
			className="cursor-pointer"
		>
			<div class="max-w-md mx-auto rounded-lg bg-[#0F1830] shadow-lg">
				<img
					class="w-full rounded-lg "
					src={image}
					alt="Sunset in the mountains"
				/>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{name}</div>
					<p class="text-gray-700 text-base">{description}</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					{technologies &&
						technologies.map((technology, idx) => (
							<span
								key={idx}
								class="inline-block bg-[#64C59A] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"
							>
								{technology}
							</span>
						))}
				</div>
			</div>
		</label>
	);
};

export default Card;
