import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
const RightSide = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_service_id,
				process.env.REACT_APP_template_id,
				form.current,
				process.env.REACT_APP_public_key
			)
			.then(
				(result) => {
					toast.success("message sent");
					form.reset();
					// console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="lg:w-1/2 w-full lg:ml-10 ml-0 mt-14">
			<form ref={form} onSubmit={sendEmail} className="w-full">
				<div className="w-[80%] mx-auto">
					<input
						type="text"
						placeholder="Name.."
						name="user_name"
						className="input input-bordered border-[#64c59a]   w-full "
						required
					/>
				</div>
				<div className="mt-10 w-[80%] mx-auto">
					<input
						type="email"
						placeholder="Email..."
						name="user_email"
						required
						className="input input-bordered border-[#64c59a]   w-full "
					/>
				</div>

				<div className="mt-10 w-[80%] mx-auto">
					<textarea
						className="textarea border-[#64c59a] h-[120px] w-full"
						placeholder="Message"
						name="message"
						required
					></textarea>
				</div>
				<div className="text-center mt-5">
					<button
						type="submit"
						className="btn text-black hover:bg-[#2e7c59] bg-[#64c59a] "
					>
						Send Mail
					</button>
				</div>
			</form>
		</div>
	);
};

export default RightSide;
