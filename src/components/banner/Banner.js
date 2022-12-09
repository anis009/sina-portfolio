import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
	return (
		<div>
			<section className="px-10 pt-[100px] flex  bg-[#FCF6F5FF] dark:bg-[#0A192F]">
				<LeftBanner />
				<RightBanner />
			</section>

			<div className="div">
				<a className="sina" href="#">
					anis molla
				</a>
			</div>
		</div>
	);
};

export default Banner;
