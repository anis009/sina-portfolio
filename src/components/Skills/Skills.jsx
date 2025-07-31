import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import { DiMongodb } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBrandTailwind } from "react-icons/tb";
import Mysql from "../../images/mysql.svg";
import expressJs from "../../images/expressjs.svg";
import { SiTypescript } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiRedux } from "react-icons/si";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="pt-[80px] px-10 bg-[#0B1224]" id="skills">
      <h1 className="text-center my-skills-header text-4xl capitalize text-[#64C59A] font-medium">
        My Skills
      </h1>

      <div className="skill-details mt-[35px] skills grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
        <div className="text-[#64C59A]  h-[150px] text-center skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <FaJsSquare className="w-12 h-12 mx-auto rounded-md"></FaJsSquare>
          <h5 className="pt-2 text-sm text-gray-200">Javascript</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <SiTypescript className="w-12 h-12 mx-auto rounded-md"></SiTypescript>
          <h5 className="pt-2 text-sm text-gray-200">TypeScript</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <FaReact className="w-12 h-12 mx-auto rounded-md"></FaReact>
          <h5 className="pt-2 text-sm text-gray-200">React</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <SiRedux className="w-12 h-12 mx-auto rounded-md"></SiRedux>
          <h5 className="pt-2 text-sm text-gray-200">Redux</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <TbBrandReactNative className="w-12 h-12 mx-auto rounded-md"></TbBrandReactNative>
          <h5 className="pt-2 text-sm text-gray-200">React Native</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <TbBrandNextjs className="w-12 h-12 mx-auto rounded-md"></TbBrandNextjs>
          <h5 className="pt-2 text-sm text-gray-200">NextJS</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <FaNodeJs className="w-12 h-12 mx-auto rounded-md"></FaNodeJs>
          <h5 className="pt-2 text-sm text-gray-200">NodeJS</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <DiRedis className="w-12 h-12 mx-auto rounded-md"></DiRedis>
          <h5 className="pt-2 text-sm text-gray-200">Redis</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <img
            src={expressJs}
            className="w-20 h-20 mx-auto rounded-md"
            alt=""
          />
          <h5 className="pt-2 text-sm text-gray-200">expressJs</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <DiMongodb className="w-12 h-12 mx-auto rounded-md"></DiMongodb>
          <h5 className="pt-2 text-sm text-gray-200">MongoDB</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <FaPhp className="w-12 h-12 mx-auto rounded-md"></FaPhp>
          <h5 className="pt-2 text-sm text-gray-200">PHP</h5>
        </div>

        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <BsFillBootstrapFill className="w-12 h-12 mx-auto rounded-md"></BsFillBootstrapFill>
          <h5 className="pt-2 text-sm text-gray-200">Bootstrap</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <TbBrandTailwind className="w-12 h-12 mx-auto rounded-md"></TbBrandTailwind>
          <h5 className="pt-2 text-sm text-gray-200">TailwindCss</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <AiOutlineAntDesign className="w-12 h-12 mx-auto rounded-md"></AiOutlineAntDesign>
          <h5 className="pt-2 text-sm text-gray-200">Ant Design</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <FaHtml5 className="w-12 h-12 mx-auto rounded-md"></FaHtml5>
          <h5 className="pt-2 text-sm text-gray-200">Html5</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          <FaCss3Alt className="w-12 h-12 mx-auto rounded-md"></FaCss3Alt>
          <h5 className="pt-2 text-sm text-gray-200">Css3</h5>
        </div>
        <div className="text-[#64C59A] text-center h-[150px] skill hover:scale-105 transition-transform duration-300  max-w-[200px] rounded-md bg-[#11192e] ">
          {/* <FaJsSquare ></FaJsSquare> */}
          <img src={Mysql} className="w-20 h-20 mx-auto rounded-md" alt="" />
          <h5 className="pt-2 text-sm text-gray-200">Mysql</h5>
        </div>
      </div>
    </div>
  );
};

export default Skills;
