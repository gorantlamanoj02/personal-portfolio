import React from "react";

const Experience = () => {
	const experiences = [
		{
			company: "Cigniti - A Coforge Company",
			location: "Hyderabad, India",
			position: "Associate Engineer (QA Automation)",
			duration: "Jul 2024 - Jul 2025",
			details: [
				"Delivered comprehensive testing for Microsoft Power Apps/Power Automate-based internal applications supporting feature releases across sprint cycles",
				"Owned automation strategy and execution, converting 90% of previously manual test cases into automated coverage",
				"Built and maintained automation scripts using Java + Selenium with Katalon Studio for end-to-end testing",
				"Developed automation assets on Cigniti's proprietary low-code/no-code platform (iNSta) with reusable keywords and Java+Selenium backend plugins",
				"Performed end-to-end testing including requirement analysis, test design, execution, defect reporting, and regression validation",
				"Actively participated in Agile/Scrum ceremonies: daily stand-ups, sprint planning, reviews, and stakeholder coordination",
				"Supported deployment cycles through release readiness validation, smoke/regression testing, and production handoffs"
			],
			tech: "Java, Selenium, Katalon Studio, Eclipse, Git, GitLab, Microsoft Power Apps/Power Automate, Agile/Scrum"
		},
		{
			company: "Cigniti Technologies Ltd",
			location: "Hyderabad, India",
			position: "C-Ignite Program (Internship + Certification)",
			duration: "Aug 2023 - Oct 2023",
			details: [
				"Completed structured certification program combining hands-on project experience with formal QA training",
				"Trained on Agile practices and applied learnings through test scenario execution and collaborative project delivery",
				"Gained practical exposure to Web testing, SQL basics, Git version control, and Jenkins CI/CD pipelines",
				"Improved communication and time management skills through team-based project activities"
			],
			tech: "Agile, Web Testing, SQL, Git, Jenkins"
		},
		{
			company: "PHN Technology Pvt Ltd",
			location: "Pune, India",
			position: "Web Developer Intern",
			duration: "Apr 2023 - Jun 2023",
			details: [
				"Built and delivered academic-level web applications using JavaScript, React, Node.js, and SQL following weekly milestones",
				"Implemented responsive UI components and integrated backend logic with iterative feedback incorporation",
				"Gained real-world exposure to deployment-oriented thinking and rapid iterative development cycles"
			],
			tech: "JavaScript, React, Node.js, SQL"
		},
		{
			company: "aDope Club | MGIT",
			location: "Hyderabad, India",
			position: "Graphic Designer",
			duration: "Apr 2020 - Apr 2024",
			details: [
				"Designed and created graphics for college annual magazine (MUSINGS '23)",
				"Organized Resolution 2.0 - Workshop on UI/UX Design for 200+ participants",
				"Organized Resolution - Seminar on Preliminaries of Graphic Design"
			],
			tech: "Adobe Photoshop, Premiere Pro, Figma, UI/UX Design"
		}
	];

	return (
		<div
			name="experience" id="experience"
			className="w-full h-full bg-[#0a192f] pb-20 flex justify-center items-center p-4 text-gray-300 pt-20">
			<div className="flex flex-col w-full justify-center items-center">
				<div className="w-full">
					<div className="pb-8 pl-4 flex flex-col w-full justify-center items-center">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							Professional Experience.
						</p>
					</div>
				</div>

				<div className="max-w-[1000px] w-full px-4">
					{experiences.map((exp, index) => (
						<div key={index} className="mb-10 pb-10 border-b border-gray-600 last:border-b-0">
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
								<div>
									<h3 className="text-2xl font-bold text-[#ccd6f6]">{exp.position}</h3>
									<p className="text-pink-600 font-semibold">{exp.company}</p>
									<p className="text-sm text-gray-400">{exp.location}</p>
								</div>
								<div className="text-right mt-2 sm:mt-0">
									<p className="text-gray-300 font-semibold">{exp.duration}</p>
								</div>
							</div>

							<ul className="list-disc list-inside text-gray-300 text-sm ml-4 mb-4 space-y-2">
								{exp.details.map((detail, i) => (
									<li key={i}>{detail}</li>
								))}
							</ul>

							<div className="ml-4">
								<p className="text-xs font-semibold text-pink-500 mb-1">Tech Stack:</p>
								<p className="text-xs text-gray-400">{exp.tech}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
