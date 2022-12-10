import React from "react";
import resume from "../../file/Anis.pdf";

const RightSide = () => {
	return (
		<div className="ml-10">
			<h1 className="text-4xl text-left text-gray-200 pt-5 font-semibold">
				Hi, I am <span className="text-[#64C59A]">Md.Anis Molla</span>
			</h1>
			<div className=" flex text-xl font-medium items-center text-[#bfbecb] my-4">
				<div className=" h-3 w-3 bg-[#64c59a] rounded-full mr-3"></div>
				<div className="flex">
					<div className="lg:w-[200px] w-[100px]">First Name</div>
					<div>: Anis</div>
				</div>
			</div>
			<div className=" flex text-xl font-medium items-center text-[#bfbecb] my-4">
				<div className=" h-3 w-3 bg-[#64c59a] rounded-full mr-3"></div>
				<div className="flex">
					<div className="lg:w-[200px] w-[100px]">Last Name</div>
					<div>: Molla</div>
				</div>
			</div>
			<div className=" flex text-xl font-medium items-center text-[#bfbecb] my-4">
				<div className=" h-3 w-3 bg-[#64c59a] rounded-full mr-3"></div>
				<div className="flex">
					<div className="lg:w-[200px] w-[100px]">Age</div>
					<div>: 22 years</div>
				</div>
			</div>
			<div className=" flex text-xl font-medium items-center text-[#bfbecb] my-4">
				<div className=" h-3 w-3 bg-[#64c59a] rounded-full mr-3"></div>
				<div className="flex">
					<div className="lg:w-[200px] w-[100px]">Nationality</div>
					<div>: Bangladesh</div>
				</div>
			</div>
			<div className=" flex text-xl font-medium items-center text-[#bfbecb] my-4">
				<div className=" h-3 w-3 bg-[#64c59a] rounded-full mr-3"></div>
				<div className="flex">
					<div className="lg:w-[200px] w-[100px]">Languages</div>
					<div>: Bengali (Native), English (Fluent)</div>
				</div>
			</div>
			<div className=" flex text-xl font-medium items-center text-[#bfbecb] my-4">
				<div className=" h-3 w-3 bg-[#64c59a] rounded-full mr-3"></div>
				<div className="flex">
					<div className="lg:w-[200px] w-[100px]">Address</div>
					<div>: South alekanda,jumir khan sarak,Barishal</div>
				</div>
			</div>
			<div className=" flex text-xl font-medium items-center text-[#bfbecb] my-4">
				<div className=" h-3 w-3 bg-[#64c59a] rounded-full mr-3"></div>
				<div className="flex">
					<div className="lg:w-[200px] w-[100px]">Freelance</div>
					<div>: Available</div>
				</div>
			</div>
			<div>
				<a href={resume} download>
					<button className=" mt-10 hire-me-btn font-medium bg-[#64C59A] rounded-[5px] text-black uppercase py-[10px] px-[20px] ">
						Download Resume
					</button>
				</a>
			</div>
		</div>
	);
};

export default RightSide;
