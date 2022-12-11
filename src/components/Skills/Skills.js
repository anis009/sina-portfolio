import React from "react";
import {
	FaJsSquare,
	FaReact,
	FaNodeJs,
	FaPhp,
	FaHtml5,
	FaCss3Alt,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBrandTailwind } from "react-icons/tb";
import Mysql from "../../images/mysql.svg";
import expressJs from "../../images/expressjs.svg";

import "./Skills.css";

const Skills = () => {
	return (
		<div className="py-[80px] px-10 bg-[#0B1224]" id="skills">
			<h1 className="text-center my-skills-header text-4xl capitalize text-[#64C59A] font-medium">
				My Skills
			</h1>

			<div className="skill-details mt-[35px] grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
				<div className="text-[#64C59A]  h-[150px] text-center skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<FaJsSquare className="w-12 h-12 mx-auto rounded-md"></FaJsSquare>
					<h5 className="text-gray-200 text-sm pt-2">Javascript</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<FaReact className="w-12 h-12 mx-auto rounded-md"></FaReact>
					<h5 className="text-gray-200 text-sm pt-2">React</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<FaNodeJs className="w-12 h-12 mx-auto rounded-md"></FaNodeJs>
					<h5 className="text-gray-200 text-sm pt-2">NodeJS</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<img
						src={expressJs}
						className="w-20 h-20 mx-auto rounded-md"
						alt=""
					/>
					<h5 className="text-gray-200 text-sm pt-2">expressJs</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<DiMongodb className="w-12 h-12 mx-auto rounded-md"></DiMongodb>
					<h5 className="text-gray-200 text-sm pt-2">MongoDB</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<FaPhp className="w-12 h-12 mx-auto rounded-md"></FaPhp>
					<h5 className="text-gray-200 text-sm pt-2">PHP</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<BsFillBootstrapFill className="w-12 h-12 mx-auto rounded-md"></BsFillBootstrapFill>
					<h5 className="text-gray-200 text-sm pt-2">Bootstrap</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<TbBrandTailwind className="w-12 h-12 mx-auto rounded-md"></TbBrandTailwind>
					<h5 className="text-gray-200 text-sm pt-2">TailwindCss</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<FaHtml5 className="w-12 h-12 mx-auto rounded-md"></FaHtml5>
					<h5 className="text-gray-200 text-sm pt-2">Html5</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<FaCss3Alt className="w-12 h-12 mx-auto rounded-md"></FaCss3Alt>
					<h5 className="text-gray-200 text-sm pt-2">Css3</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					{/* <FaJsSquare ></FaJsSquare> */}
					<img src={Mysql} className="w-20 h-20 mx-auto rounded-md" alt="" />
					<h5 className="text-gray-200 text-sm pt-2">Mysql</h5>
				</div>
				<div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
					<FaJsSquare className="w-12 h-12 mx-auto rounded-md"></FaJsSquare>
					<h5 className="text-gray-200 text-sm pt-2">Javascript</h5>
				</div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Skills;
