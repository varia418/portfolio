"use client";

export default function Contact() {
	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		console.log(e);
	}
	return (
		<div className="sm:p-10 py-10 h-full relative">
			<h1 className="mb-8 text-3xl font-bold relative">
				Contact Me
				<span className="absolute bg-[--primary-color] h-1 w-12 left-0 -bottom-2"></span>
				<span className="absolute bg-[--primary-color] h-1 w-8 left-0 -bottom-4"></span>
			</h1>
			<div className="flex justify-center">
				<div className="border bg-white rounded-lg p-5 sm:p-10 max-w-5xl">
					<h2 className="mb-4 text-xl font-semibold">Get in Touch</h2>
					<div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
						<div className="grow border rounded-lg p-3 sm:p-6 flex flex-col items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-8 primary-color mb-2"
							>
								<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
								<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
							</svg>

							<span className="text-lg font-semibold">Email</span>
							<span className="text-center">
								ltnhan2610@gmail.com
							</span>
						</div>
						<div className="grow border rounded-lg p-3 sm:p-6 flex flex-col items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-8 primary-color mb-2"
							>
								<path
									fillRule="evenodd"
									d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
									clipRule="evenodd"
								/>
							</svg>

							<span className="text-lg font-semibold">
								Location
							</span>
							<span className="text-center">
								Ho Chi Minh City, Viet Nam
							</span>
						</div>
					</div>
					<h2 className="mb-4 text-xl font-semibold">Contact Form</h2>
					<form
						onSubmit={handleSubmit}
						className="grid grid-cols-2 gap-4"
					>
						<input
							className="border p-2 rounded"
							placeholder="Name"
						/>
						<input
							className="border p-2 rounded"
							placeholder="Email"
						/>
						<input
							className="border col-span-full p-2 rounded"
							placeholder="Subject"
						/>
						<textarea
							className="border col-span-full p-2 rounded"
							placeholder="Message"
							rows={5}
						/>
						<button
							type="submit"
							className="primary-button font-bold col-span-full rounded"
						>
							SEND
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
