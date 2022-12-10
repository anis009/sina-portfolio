import React from "react";
import sina from "../../images/about-image.jpg";

const LeftSide = () => {
	return (
		<div className="lg:w-1/2 w-full  border-4 rounded border-[#64c59a]">
			<img src={sina} className="w-full" alt="sina" />
		</div>
	);
};

export default LeftSide;
