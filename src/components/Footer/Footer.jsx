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
			<div className="flex justify-center mt-6">
				<a
					href="https://www.linkedin.com/in/md-anis-molla-19515417b/"
					target="_blank"
					className="block w-8 h-8 bg-[#64C59A] rounded-full cursor-pointer "
				>
					<IoLogoLinkedin className="w-8 h-8 p-2 text-black"></IoLogoLinkedin>
				</a>
				<a
					href="https://github.com/anichu"
					target="_blank"
					className="block w-8 h-8 mx-2 bg-[#64C59A] rounded-full cursor-pointer "
				>
					<IoLogoGithub className="w-8 h-8 p-2 text-black"></IoLogoGithub>
				</a>
				<a
					href="https://twitter.com/MDAnisMolla3"
					target="_blank"
					className="block w-8 h-8 mx-2 bg-[#64C59A] rounded-full cursor-pointer "
				>
					<IoLogoTwitter className="w-8 h-8 p-2 text-black"></IoLogoTwitter>
				</a>
				<a
					href="https://www.facebook.com/mdanis.molla.750983/"
					target="_blank"
					className="block w-8 h-8 mx-2 bg-[#64C59A] rounded-full cursor-pointer "
				>
					<IoLogoFacebook className="w-8 h-8 p-2 text-black"></IoLogoFacebook>
				</a>
				<a
					href="#"
					className="block w-8 h-8 mx-2 bg-[#64C59A] rounded-full cursor-pointer "
				>
					<IoLogoInstagram className="w-8 h-8 p-2 text-black"></IoLogoInstagram>
				</a>
			</div>

			<div className="py-3 text-center"> &copy; 2022 MD:Anis Molla</div>
		</div>
	);
};

export default Footer;
