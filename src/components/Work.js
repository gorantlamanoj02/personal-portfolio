import React from "react";
import AgroSilvics from "../assets/AgroSilvics.jpg";
import VIVA from "../assets/VIVA.jpg";
import Ushort from '../assets/Ushort.jpg';
import DramaLand from '../assets/DramaLand.jpg';

import "./Work.css";

const ownProjects = [
	{
		name: "AgroSilvics",
		img_link: AgroSilvics,
	},
	{
		name: "VIVA",
		img_link: VIVA,
		git_link: "https://github.com/gorantlamanoj02/VIVA",
	},
	{
		name: "UShort",
		img_link: Ushort,
		git_link: "https://github.com/gorantlamanoj02/UShort",
	},
	{
		name: "Drama Land",
		img_link: DramaLand,
		git_link: "https://github.com/gorantlamanoj02/DramaLand/tree/master",
	},
];


const allProjects = ownProjects.map((project) => {
	return (
		<div class="flex justify-center">
			<figure class="snip1193">
				<img src={project.img_link} alt="sample31" />
				<figcaption>
					<div>
						<h4 className="opacity-100">{project.name}</h4>
					</div>
					<a
						href={project.git_link}
						class="bottom-left"
						target="__blank">
						<i class="ion-social-github"></i>
					</a>
					<a
						href={project.display_link}
						class="bottom-right"
						target="__blank">
						<i class="ion-android-bulb"></i>
					</a>
				</figcaption>
			</figure>
		</div>
	);
});

const Work = () => {
	return (
		<div className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
		name="work" id="work">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<p className="text-4xl font-bold inline border-b-4 border-pink-600">
					Work.
				</p>
				<p className="pt-8">Checkout some of my previous work.</p>{" "}
				<br></br>
				<div class="container mx-auto">
					<div class="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
						{allProjects}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;