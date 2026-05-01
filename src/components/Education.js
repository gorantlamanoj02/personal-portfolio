import React from "react";

const Education = () => {
	const education = [
		{
			degree: "Master of Engineering in Information Systems Security CO-OP",
			university: "Concordia University",
			location: "Montreal, Canada",
			duration: "2025 - Present",
			gpa: "GPA: 3.1",
			details: [
				"Specializing in cybersecurity, threat analysis, and secure system design",
				"Coursework includes cryptography, network security, and security protocols"
			]
		},
		{
			degree: "Bachelor of Technology in Computer Science and Engineering",
			university: "Mahatma Gandhi Institute of Technology",
			location: "Hyderabad, India",
			duration: "2020 - 2024",
			gpa: "GPA: 8.01",
			details: [
				"Strong foundation in software development, data structures, and algorithms",
				"Completed major and minor projects focusing on full-stack and AI applications"
			]
		}
	];

	return (
		<div
			name="education" id="education"
			className="w-full h-full bg-[#0a192f] pb-20 flex justify-center items-center p-4 text-gray-300 pt-20">
			<div className="flex flex-col w-full justify-center items-center">
				<div className="w-full">
					<div className="pb-8 pl-4 flex flex-col w-full justify-center items-center">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							Education.
						</p>
					</div>
				</div>

				<div className="max-w-[1000px] w-full px-4">
					{education.map((edu, index) => (
						<div key={index} className="mb-8">
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
								<div>
									<h3 className="text-2xl font-bold text-[#ccd6f6]">{edu.degree}</h3>
									<p className="text-pink-600 font-semibold">{edu.university}</p>
									<p className="text-sm text-gray-400">{edu.location}</p>
								</div>
								<div className="text-right mt-2 sm:mt-0">
									<p className="text-gray-300 font-semibold">{edu.duration}</p>
									<p className="text-pink-600">{edu.gpa}</p>
								</div>
							</div>
							<ul className="list-disc list-inside text-gray-300 text-sm ml-4">
								{edu.details.map((detail, i) => (
									<li key={i} className="mb-1">{detail}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Education;
