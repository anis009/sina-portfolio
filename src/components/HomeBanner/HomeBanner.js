import React from "react";
import "./Homebanner.css";
import sina from "../../images/sina.jpg";
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
		<div className="bg-[#0B1224] h-[90vh]">
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
			<p className="w-[70%] mx-auto pt-5 text-xl text-center text-gray-200">
				I am a Full Stack Developer from Bangladesh. As a tech enthusiast, I
				have always wanted to become a Software Engineer to learn and contribute
				to technology. And I have always believed that I need to do what I love.
				I love solving problems, making something great, making something
				meaningful.
			</p>
			<div className="flex mt-6 justify-center">
				<a
					href="#"
					className="bg-[#64C59A] p-2 cursor-pointer mx-2 social-link rounded-full"
				>
					<IoLogoLinkedin className="w-7 h-7"></IoLogoLinkedin>
				</a>
				<a
					href="#"
					className="bg-[#64C59A] p-2 cursor-pointer social-link mx-2 rounded-full"
				>
					<IoLogoGithub className="w-7 h-7"></IoLogoGithub>
				</a>
				<a
					href="#"
					className="bg-[#64C59A] p-2 cursor-pointer social-link mx-2 rounded-full"
				>
					<IoLogoTwitter className="w-7 h-7"></IoLogoTwitter>
				</a>
				<a
					href="#"
					className="bg-[#64C59A] p-2 social-link cursor-pointer mx-2 rounded-full"
				>
					<IoLogoFacebook className="w-7 h-7"></IoLogoFacebook>
				</a>
				<a
					href="#"
					className="bg-[#64C59A] p-2 social-link cursor-pointer mx-2 rounded-full"
				>
					<IoLogoInstagram className="w-7 h-7"></IoLogoInstagram>
				</a>
			</div>

			<div className="text-center mt-10 pt-10  flex justify-center items-center text-white">
				<div className="text-[#64c59a] animate-bounce">
					<FaArrowDown className="w-6 h-6 font-thin  m-auto"></FaArrowDown>
				</div>
				<h3 className="uppercase ml-2">scroll down</h3>
			</div>
		</div>
	);
};

export default HomeBanner;
