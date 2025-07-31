import React from "react";

const Modal = ({ showProject }) => {
	const { image, name, description, technologies } = showProject;
	return (
		<div>
			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative w-11/12 max-w-5xl">
					<label
						htmlFor="my-modal-3"
						className="btn btn-sm btn-circle absolute right-2 top-2 "
					>
						✕
					</label>
					<div className="p-5">
						<img src={image} className="mt-5 rounded-md" alt="" />
						<h3 className="text-lg font-bold">{name}</h3>
						<p className="py-4">{description}</p>
						<div class="px-6 pt-4 pb-2">
							{technologies &&
								technologies.map((technology, idx) => (
									<span
										key={idx}
										class="inline-block bg-[#64C59A] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"
									>
										{technology}
									</span>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
