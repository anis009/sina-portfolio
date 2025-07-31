import React from "react";
import sina from "../../images/about-image.jpg";

const LeftSide = () => {
	return (
		<div className="w-full p-3 lg:w-1/2">
			<div className=" w-full border-4 rounded border-[#64c59a]">
				<img src={sina} className="w-full " alt="sina" />
			</div>
		</div>
	);
};

export default LeftSide;
