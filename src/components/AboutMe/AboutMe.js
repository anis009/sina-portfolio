import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./AboutMe.css";

const AboutMe = () => {
	return (
		<div className="py-10 sm:mx-10 mx-0" id="about">
			<h1 className="capitalize about-me-header text-center text-6xl text-[#64C59A]">
				About Me
			</h1>
			<div className="flex lg:flex-row flex-col mt-16 items-center">
				<LeftSide></LeftSide>
				<RightSide></RightSide>
			</div>
		</div>
	);
};

export default AboutMe;
