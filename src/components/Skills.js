import React from "react";
import {
	DiHtml5,
	DiCss3,
	DiJavascript,
	DiReact,
	DiNodejs,
	DiGithubBadge,
	DiJava,
	DiPython,
	DiDocker,
	DiDatabase
} from "react-icons/di";
import { SiSelenium, SiJenkins } from "react-icons/si";

const Skills = () => {
	return (
		<div
			name="skills" id="skills"
			className="w-full h-full bg-[#0a192f] text-gray-300 pt-20">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="text-center pb-8 pl-4">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						My Skills.
					</p>
				</div>
				<p>Frontend | Backend | Database | QA & DevOps Technologies</p>

				<div className="px-20 w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-y-5">
					<div className="mx-auto justify-center items-center">
						<DiHtml5 size={50} className='w-full'/>
						<p className="py-2">HTML</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiCss3 size={50} className='w-full'/>
						<p className="py-2">CSS</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiJavascript size={50} className='w-full'/>
						<p className="py-2">JavaScript</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiReact size={50} className='w-full'/>
						<p className="py-2">React JS</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiNodejs size={50} className='w-full'/>
						<p className="py-2">Node JS</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiJava size={50} className='w-full'/>
						<p className="py-2">Java</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiPython size={50} className='w-full'/>
						<p className="py-2">Python</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiDatabase size={50} className='w-full'/>
						<p className="py-2">OracleSQL</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<SiSelenium size={50} className='w-full'/>
						<p className="py-2">Selenium</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiGithubBadge size={50} className='w-full'/>
						<p className="py-2">Git/GitHub</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiDocker size={50} className='w-full'/>
						<p className="py-2">Docker</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<SiJenkins size={50} className='w-full'/>
						<p className="py-2">Jenkins</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
