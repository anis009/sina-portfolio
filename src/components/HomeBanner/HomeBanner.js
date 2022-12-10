import React from "react";
import "./Homebanner.css";
import sina from "../../images/sina.jpg";
import Typewriter from "typewriter-effect";
import resume from "../../file/Anis.pdf";
import {
	IoLogoFacebook,
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoTwitter,
} from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

const HomeBanner = () => {
	return (
		<div className="bg-[#0B1224] pt-10 text-black min-h-[90vh]" id="home">
			<div className="home-banner-overlay bg-[#0f1830]   rounded-md shadow-lg sm:w-[80%] w-[95%] mx-auto my-2">
				<div className="pt-10">
					<img
						src={sina}
						alt="sina"
						className="mx-auto z-10 p-0 rounded-full border-[5px] border-blue-900"
					/>
				</div>
				<h1 className="text-4xl text-center text-gray-200 pt-5 font-semibold">
					{" "}
					Hi, I am <span className="text-[#64C59A]">Md.Anis Molla</span>
				</h1>

				<div className="w-[80%] mx-auto pt-1 text-xl  text-justify text-[#64c59a]">
					<Typewriter
						options={{
							strings: [
								"Software Engineer",
								"Full-stack Engineer",
								"front-end Engineer",
								"Back-end Engineer",
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>

				<p className="w-[80%] mx-auto pt-3 text-xl  text-justify text-gray-200">
					I am a full-stack software developer with more than one year of
					experience in JavaScript, and Nodejs, building, maintaining, and
					deploying single page/e-commerce applications. I can adapt to any
					technology rapidly and make myself flexible upon any tech stack. A
					Passionate and diligent person who wants to learn continuously
				</p>

				<div className="text-center py-5">
					<a href={resume} download>
						<button className="hire-me-btn font-medium bg-[#64C59A] rounded-[5px] text-black uppercase py-[10px] px-[20px] ">
							Download Resume
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HomeBanner;
