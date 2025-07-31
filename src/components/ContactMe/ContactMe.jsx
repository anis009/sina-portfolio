import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./ContactMe.css";

const ContactMe = () => {
	return (
		<div className="pt-[80px] sm:mx-10 mx-5" id="contact">
			<h1 className="text-center  contact-me-header text-4xl capitalize text-[#64C59A] font-medium">
				Contact Me
			</h1>
			<div className="flex flex-col items-start my-10 lg:flex-row">
				<LeftSide></LeftSide>
				<RightSide></RightSide>
			</div>
		</div>
	);
};

export default ContactMe;
