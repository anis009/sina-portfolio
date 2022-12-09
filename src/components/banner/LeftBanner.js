import React from "react";
import Typewriter from "typewriter-effect";
import "./leftBanner.css";
import profile2 from "../../images/profile2.jpg";

const LeftBanner = () => {
	return (
		<div className="h-[80vh] bg-[#F0F2F5] dark:bg-[#0A192F] w-1/2 shadow-lg rounded-md ">
			<div className="h-[80vh] w-full  overflow-hidden rounded-md">
				<img
					src={profile2}
					alt=""
					className="clip-image h-[50vh] w-[100%]  rounded-t-md"
				/>
				<h1 className="text-center text-3xl dark:text-[#CCD6F6] text-gray-600 font-semibold mt-3">
					Anis Molla
				</h1>
				<p className="flex items-center text-gray-600 dark:text-[#58E1C4] mt-4 justify-center">
					<Typewriter
						options={{
							strings: [
								"Front-End Developer",
								"Back-End Developer",
								"Programmer",
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</p>

				<p className="text-center mt-5">
					<button className="text-xl uppercase bg-[#19b190] dark:text-[#19b190] dark:bg-[#0A192F]  border-3 border-[#19b190] dark:border-[#19b190] dark:hover:bg-teal-600 dark:hover:bg-opacity-10 dark:border-2 duration-300 hover:bg-[#217c68]  text-white px-5 py-2 rounded-md shadow-md">
						download resume
					</button>
				</p>
			</div>
		</div>
	);
};

export default LeftBanner;
