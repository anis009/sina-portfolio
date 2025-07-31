import React, { useEffect } from "react";
import "./Homebanner.css";
import sina from "../../images/sina.jpg";
import Typewriter from "typewriter-effect";
import resume from "../../file/Anis.pdf";

const HomeBanner = () => {
	return (
		<div className="bg-[#0B1224] text-black  pt-[60px]" id="home">
			<div className="home-banner-overlay bg-[#0f1830]   rounded-md shadow-lg sm:w-[80%] w-[95%] mx-auto my-2">
				<div className="flex w-full h-full pt-5">
					<div class="circle-wrapper">
						<div class="success circle"></div>
						<div class="icon">
							<img
								src={sina}
								alt="sina"
								className="z-10 w-full h-full p-0 mx-auto rounded-full profile-image"
							/>
						</div>
					</div>
				</div>
				<h1 className="pt-3 text-4xl font-semibold text-center text-gray-200">
					{" "}
					Hi, I am <span className="text-[#64C59A]">Md.Anis Molla</span>
				</h1>

				<div className="w-[90%] mx-auto pt-1 text-xl  text-left text-[#64c59a]">
					<Typewriter
						options={{
							strings: [
								"Software Engineer",
								"Full-stack Engineer",
								"front-end Engineer",
								"Back-end Engineer",
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				<div className="w-[90%] mx-auto pt-1 text-xl  text-left text-gray-200">
					<p className="font-bold">Dhaka ,Bangladesh.</p>
				</div>

				<p className="w-[90%] mx-auto pt-3 text-base  text-left text-gray-200">
					I am a full-stack software developer with more than one year of
					experience in JavaScript, and Nodejs, building, maintaining, and
					deploying single page/e-commerce applications. I can adapt to any
					technology rapidly and make myself flexible upon any tech stack. A
					Passionate and diligent person who wants to learn continuously.
				</p>

				<div className="py-5 text-center">
					<a href={resume} download>
						<button className="hire-me-btn font-medium bg-[#64C59A] rounded-[5px] text-black uppercase py-[10px] px-[20px] ">
							Download Resume
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HomeBanner;
