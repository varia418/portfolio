export default function Contact() {
	return (
		<div className="p-10 h-full flex justify-center items-center relative">
			<h1 className="primary-color mb-8 text-3xl font-bold absolute top-5 left-5">
				Contact Me
				<span className="absolute bg-[--primary-color] h-1 w-12 left-0 -bottom-2"></span>
				<span className="absolute bg-[--primary-color] h-1 w-8 left-0 -bottom-4"></span>
			</h1>
			<div className="border bg-white rounded-lg p-10">
				<h2 className="mb-4 text-xl font-semibold">Get in Touch</h2>
				<div className="flex justify-between gap-4 mb-8">
					<div className="grow border rounded-lg p-6 flex flex-col items-center">
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
						<span>ltnhan2610@gmail.com</span>
					</div>
					<div className="grow border rounded-lg p-6 flex flex-col items-center">
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

						<span className="text-lg font-semibold">Location</span>
						<span>Ho Chi Minh City, Viet Nam</span>
					</div>
				</div>
				<h2 className="mb-4 text-xl font-semibold">Contact Form</h2>
				<form className="grid grid-cols-2 gap-4">
					<input className="border" placeholder="Name" />
					<input className="border" placeholder="Email" />
					<input
						className="border col-span-full"
						placeholder="Subject"
					/>
					<textarea
						className="border col-span-full"
						placeholder="Message"
					/>
					<button className="primary-button font-bold col-span-full">
						Send
					</button>
				</form>
			</div>
		</div>
	);
}
