import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("ezFoOyG-QMKhBgWIn");

const Contact = () => {
	const form = useRef();
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate form
		if (!formData.name || !formData.email || !formData.message) {
			alert("Please fill in all fields");
			return;
		}

		setLoading(true);

		try {
			// Send email using EmailJS
			const result = await emailjs.sendForm(
				"service_drpeaae",
				"template_a4whzja",
				form.current
			);

			if (result.status === 200) {
				// Success!
				setSubmitted(true);
				setFormData({ name: "", email: "", message: "" });
				
				// Reset success message after 5 seconds
				setTimeout(() => {
					setSubmitted(false);
				}, 5000);
			}
		} catch (error) {
			console.error("Email sending failed:", error);
			alert("Failed to send email. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pt-20"
			name="contact" id="contact">
			<form
				ref={form}
				onSubmit={handleSubmit}
				className="flex flex-col max-w-[600px] w-full"
				autoComplete="off">
				<div className="pb-8">
					<div className="flex flex-col justify-center items-center w-full h-full">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 ">
							Contact Me.
						</p>
					</div>
					<p className="text-gray-300 pt-8">
						Submit the form below or shoot me an email -
						gorantlamanoj02.ca@gmail.com
					</p>
				</div>

				{submitted && (
					<div className="bg-green-500 text-white p-3 mb-4 rounded text-center">
						✓ Email sent successfully! I'll get back to you soon.
					</div>
				)}

				<input
					className="bg-[#ccd6f6] p-2 mb-2"
					type="text"
					placeholder="Name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="email"
					placeholder="Email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<textarea
					className="bg-[#ccd6f6] p-2 mb-4"
					name="message"
					rows="10"
					placeholder="Message"
					value={formData.message}
					onChange={handleChange}
					required></textarea>
				<button 
					type="submit"
					disabled={loading}
					className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center disabled:opacity-50 disabled:cursor-not-allowed transition-all">
					{loading ? "Sending..." : "Let's Collaborate"}
				</button>
			</form>
		</div>
	);
};

export default Contact;
