import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
	return (
		<div name="home" id="home" className="w-full h-screen bg-[#0a192f]">
			{/* Container */}
			{/* mx means margin, px means padding*/}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-pink-600">My name is</p>
				<h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
					Gorantla Manoj Kumar.
				</h1>
				<h2 className="text-4xl sm:text-3xl font-bold text-[#8892b0] pt-2">
					I'm a Web Developer | Graphic Designer | Tech - Enthusiast | Passionate Learner.
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
				I concentrate on full-stack development, debugging, testing, and developing impactful websites for humanity's benefit.
				</p>
				<div>
					<button
						className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
						id="viewWorkButton">
						<a href="/#work">View My Work</a>
						<span className="hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-1" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
