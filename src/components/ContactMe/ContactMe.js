import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./ContactMe.css";

const ContactMe = () => {
	return (
		<div className="pt-[80px] mx-10" id="contact">
			<h1 className="text-center  contact-me-header text-4xl capitalize text-[#64C59A] font-medium">
				Contact Me
			</h1>
			<div className="my-10  items-start flex lg:flex-row flex-col">
				<LeftSide></LeftSide>
				<RightSide></RightSide>
			</div>
		</div>
	);
};

export default ContactMe;
