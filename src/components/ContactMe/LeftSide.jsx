import React from "react";
import { HiPhone, HiOutlineMail } from "react-icons/hi";

const LeftSide = () => {
	return (
		<div className="w-full lg:w-1/2">
			<h3 className="text-3xl mb-5 text-[#64C59A]">Contact Information</h3>
			<div className="bg-[#0F1830]  w-full border-2 border-[#64C59A] rounded">
				<div className="flex sm:flex-row flex-col  items-center contact-flex sm:p-5 p-3 w-full bg-[rgba(100,197,154,0.07)] h-full">
					<div className="bg-[#43af7f] w-12 h-12 flex items-center rounded-full justify-center">
						<HiPhone className="w-8 h-8 font-bold text-white "></HiPhone>
					</div>
					<div className="ml-0 text-white sm:ml-10">
						<h3 className="text-center md:text-2xl sm:text-xl sm:text-left">
							Contact On Phone
						</h3>
						<p className="mt-2 text-center md:text-2xl sm:text-xl sm:text-left">
							+880 01794110237
						</p>
					</div>
				</div>
			</div>
			<div className="bg-[#0F1830]  w-full border-2 mt-5 border-[#64C59A] rounded">
				<div className="flex  sm:flex-row flex-col  items-center sm:p-5 p-2 w-full bg-[rgba(100,197,154,0.07)] h-full">
					<div className="bg-[#43af7f] w-12 h-12 flex items-center rounded-full justify-center">
						<HiOutlineMail className="w-8 h-8 font-bold text-white "></HiOutlineMail>
					</div>
					<div className="ml-0 text-white sm:ml-10">
						<h3 className="text-center md:text-2xl sm:text-xl sm:text-left">
							Contact On Email
						</h3>
						<p className="mt-2 text-center md:text-2xl sm:text-xl sm:text-left">
							md.anis.molla009@gmail.com
						</p>
					</div>
				</div>
			</div>
			<div className="bg-[#0F1830]  w-full border-2 mt-5 border-[#64C59A] rounded">
				<div className="flex  sm:flex-row flex-col   items-center sm:p-5 p-3 w-full bg-[rgba(100,197,154,0.07)] h-full">
					<div className="bg-[#43af7f] w-12 h-12 flex items-center rounded-full justify-center">
						<HiOutlineMail className="w-8 h-8 font-bold text-white "></HiOutlineMail>
					</div>
					<div className="ml-0 text-white sm:ml-10">
						<h3 className="text-center md:text-2xl sm:text-xl sm:text-left">
							Contact Address
						</h3>
						<p className="mt-2 text-center md:text-2xl sm:text-xl sm:text-left">
							jumir khan sarak,south alekanda,Barishal,Bangladesh
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSide;
