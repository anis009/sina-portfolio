import React from "react";
import sina from "../../images/about-image.jpg";

const LeftSide = () => {
	return (
		<div className="w-1/2 h-[600px] border-4 rounded border-[#64c59a]">
			<img src={sina} className="w-full h-full" alt="sina" />
		</div>
	);
};

export default LeftSide;
