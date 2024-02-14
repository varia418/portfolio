export default function Contact() {
	return (
		<div className="mt-10 border bg-white rounded-lg p-10">
			<h1 className="primary-color">Contact Me</h1>
			<div className="flex justify-between">
				<div className="grow">Email</div>
				<div className="grow">Location</div>
			</div>
			<form className="grid grid-cols-2 gap-4">
				<input className="border" placeholder="Name" />
				<input className="border" placeholder="Email" />
				<input className="border col-span-full" placeholder="Subject" />
				<textarea
					className="border col-span-full"
					placeholder="Message"
				/>
				<button className="primary-button font-bold col-span-full">
					Send
				</button>
			</form>
		</div>
	);
}
