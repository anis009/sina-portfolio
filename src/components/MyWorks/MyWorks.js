import React from "react";

const MyWorks = () => {
	return (
		<div className="py-10">
			<h1 className="text-center my-skills-header text-5xl capitalize text-[#64C59A] font-medium">
				My Works
			</h1>
			<div className="mt-10">
				<div className="tabs flex justify-center tabs-boxed w-[600px] mx-auto">
					<a href="#" className="tab">
						ALL
					</a>
					<a href="#" className="tab">
						MERN
					</a>
					<a className="tab"> React </a>
					<a className="tab tab-active">Html&Css</a>
					<a className="tab">Javascript</a>
					<a href="" className="tab">
						Nodejs
					</a>
					<a href="" className="tab">
						PHP
					</a>
				</div>
			</div>
		</div>
	);
};

export default MyWorks;
