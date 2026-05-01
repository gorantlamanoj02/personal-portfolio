import React from "react";
import DevSecOPs from "../assets/DevSecOps.png";
import SecureChat from "../assets/SecureChat.png";
import AgroSilvics from "../assets/AgroSilvics.jpg";
import VIVA from "../assets/VIVA.jpg";
import Ushort from '../assets/Ushort.jpg';
import DramaLand from '../assets/DramaLand.jpg';

import "./Work.css";

const ownProjects = [
	{
		name: "Agile Forensics & Security Pipeline",
		img_link: DevSecOPs,
		git_link: "https://github.com/gorantlamanoj02/AgileForensics",
	},
	{
		name: "Secure End-to-End Messaging System",
		img_link: SecureChat,
		git_link: "https://github.com/gorantlamanoj02/SecureChat",
	},
	{
		name: "AgroSilvics",
		img_link: AgroSilvics,
		git_link: "https://github.com/gorantlamanoj02/AgroSilvics",
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
		name: "DramaLand",
		img_link: DramaLand,
		git_link: "https://github.com/gorantlamanoj02/Drama-Land",
	},
];


const allProjects = ownProjects.map((project, index) => {
	return (
		<div key={index} className="flex justify-center">
			<figure className="snip1193">
				<img src={project.img_link} alt={project.name} />
				<figcaption>
					<div>
						<h4 className="opacity-100">{project.name}</h4>
					</div>
					<a
						href={project.git_link}
						className="bottom-left"
						target="_blank"
						rel="noopener noreferrer">
						<i className="ion-social-github"></i>
					</a>
					<a
						href={project.display_link}
						className="bottom-right"
						target="_blank"
						rel="noopener noreferrer">
						<i className="ion-android-bulb"></i>
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
					Projects.
				</p>
				<p className="pt-8">Checkout some of my personal and academic projects.</p>{" "}
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