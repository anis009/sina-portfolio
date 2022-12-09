import React from "react";
import "./rightbanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faInstagram,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const RightBanner = () => {
	return (
		<div className="w-1/2">
			<h1 className="text-2xl ml-6 mb-5 dark:text-[#58E1C4] ">
				<span className="text-[]">About</span> Me
			</h1>
			<hr className="ml-6 mt-1 hr-banner" />
			<p className="text-xl mx-6 mt-20 dark:text-[#CCD6F6] ">
				<b>Hello! I'm Anis Molla</b>.{" "}
				<span className="text-gray-600 dark:text-[#CCD6F6]">
					{" "}
					Back-end & Frond-end developer from Bangladesh. As a tech enthusiast,
					I have always wanted to become a Software Engineer to learn and
					contribute to technology. And I have always believed that I need to do
					what I love. I love solving problems, making something great, making
					something meaningful.
				</span>
			</p>
			<p className="text-left mt-10 ml-6">
				<button className="text-xl uppercase bg-[#2BAE66FF] dark:text-[#19b190] dark:bg-[#0A192F]  border-3 border-[#19b190] dark:border-[#19b190] dark:hover:bg-teal-600 dark:hover:bg-opacity-10 dark:border-2 duration-300 hover:bg-[#217c68]  text-white px-5 py-2 rounded-md shadow-md">
					get touch
				</button>
			</p>
			<div className="flex justify-evenly text-2xl mt-20 mx-6">
				<div className="cursor-pointer">
					<FontAwesomeIcon icon={faGithub} />
				</div>
				<div className="cursor-pointer">
					<FontAwesomeIcon icon={faLinkedin} />
				</div>
				<div className="cursor-pointer">
					<FontAwesomeIcon icon={faTwitter} />
				</div>
				<div className="cursor-pointer">
					<FontAwesomeIcon icon={faFacebook} />
				</div>
				<div className="cursor-pointer">
					<FontAwesomeIcon icon={faInstagram} />
				</div>
				<div className="cursor-pointer">
					<FontAwesomeIcon icon={faEnvelope} />
				</div>
			</div>
		</div>
	);
};

export default RightBanner;
