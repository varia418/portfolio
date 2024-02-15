export default function Contact() {
	return (
		<div className="p-10 h-full flex justify-center items-center relative">
			<h1 className="primary-color mb-8 text-3xl font-bold absolute top-5 left-5">
				Contact Me
				<span className="absolute bg-[--primary-color] h-1 w-12 left-0 -bottom-2"></span>
				<span className="absolute bg-[--primary-color] h-1 w-8 left-0 -bottom-4"></span>
			</h1>
			<div className="border bg-white rounded-lg p-10">
				<div className="flex justify-between">
					<div className="grow">Email</div>
					<div className="grow">Location</div>
				</div>
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
