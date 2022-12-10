import React from "react";
import {
	IoLogoFacebook,
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoTwitter,
} from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
	return (
		<div className="border-t-2 border-t-[#64C59A]">
			<div className="flex mt-6 justify-center">
				<a
					href="#"
					className="bg-[#64C59A] p-2 cursor-pointer mx-4 social-link rounded-full"
				>
					<IoLogoLinkedin className="w-7 text-black h-7"></IoLogoLinkedin>
				</a>
				<a
					href="#"
					className="bg-[#64C59A] p-2 cursor-pointer social-link mx-4 rounded-full"
				>
					<IoLogoGithub className="w-7 text-black h-7"></IoLogoGithub>
				</a>
				<a
					href="#"
					className="bg-[#64C59A] p-2 cursor-pointer social-link mx-4 rounded-full"
				>
					<IoLogoTwitter className="w-7 text-black h-7"></IoLogoTwitter>
				</a>
				<a
					href="#"
					className="bg-[#64C59A] p-2 social-link cursor-pointer mx-4 rounded-full"
				>
					<IoLogoFacebook className="w-7 text-black h-7"></IoLogoFacebook>
				</a>
				<a
					href="#"
					className="bg-[#64C59A] p-2 social-link cursor-pointer mx-4 rounded-full"
				>
					<IoLogoInstagram className="w-7 text-black h-7"></IoLogoInstagram>
				</a>
			</div>

			<div className="text-center py-3"> &copy; 2022 MD:Anis Molla</div>
		</div>
	);
};

export default Footer;
