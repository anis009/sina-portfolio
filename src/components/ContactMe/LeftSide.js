import React from "react";
import { HiPhone, HiOutlineMail } from "react-icons/hi";

const LeftSide = () => {
	return (
		<div className="lg:w-1/2 w-full">
			<h3 className="text-3xl mb-5 text-[#64C59A]">Contact Information</h3>
			<div className="bg-[#0F1830]  w-full border-2 border-[#64C59A] rounded">
				<div className="flex items-center contact-flex sm:p-5 p-3 w-full bg-[rgba(100,197,154,0.07)] h-full">
					<div className="bg-[#43af7f] w-12 h-12 flex items-center rounded-full justify-center">
						<HiPhone className="w-8 h-8 text-white font-bold "></HiPhone>
					</div>
					<div className="ml-10 text-white">
						<h3 className="text-2xl">Contact On Phone</h3>
						<p className="text-xl mt-2">+880 01794110237</p>
					</div>
				</div>
			</div>
			<div className="bg-[#0F1830]  w-full border-2 mt-5 border-[#64C59A] rounded">
				<div className="flex contact-flex items-center sm:p-5 p-3 w-full bg-[rgba(100,197,154,0.07)] h-full">
					<div className="bg-[#43af7f] w-12 h-12 flex items-center rounded-full justify-center">
						<HiOutlineMail className="w-8 h-8 text-white font-bold "></HiOutlineMail>
					</div>
					<div className="ml-10 text-white">
						<h3 className="text-2xl">Contact On Email</h3>
						<p className="text-xl mt-2">md.anis.molla009@gmail.com</p>
					</div>
				</div>
			</div>
			<div className="bg-[#0F1830]  w-full border-2 mt-5 border-[#64C59A] rounded">
				<div className="flex flex-row contact-flex items-center sm:p-5 p-3 w-full bg-[rgba(100,197,154,0.07)] h-full">
					<div className="bg-[#43af7f] w-12 h-12 flex items-center rounded-full justify-center">
						<HiOutlineMail className="w-8 h-8 text-white font-bold "></HiOutlineMail>
					</div>
					<div className="ml-10 text-white">
						<h3 className="text-2xl">Contact Address</h3>
						<p className="text-xl mt-2">
							jumir khan sarak,south alekanda,Barishal,Bangladesh
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSide;
