import React from "react";

const About = () => {
	return (
		<div
			name="about" id="about"
			className="w-full h-full bg-[#0a192f] pb-20 flex justify-center items-center p-4 text-gray-300 pt-20">
			<div className="flex flex-col w-full justify-center items-center ">
				<div className="w-full">
					<div className="pb-8 pl-4 flex flex-col w-full justify-center items-center ">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About Me.
						</p>
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>
							Hi. I'm Manoj, nice to meet you. Check out the portfolio.
						</p>
					</div>
					<div>
						<p>
						Passionate software creator, shaping excellence, and enhancing lives with innovative solutions.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
