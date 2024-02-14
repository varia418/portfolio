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
				<button className="bg-[--primary-color] border-2 border-[--primary-color] text-white rounded-full px-5 py-2 mt-4 hover:bg-slate-200 hover:text-[--primary-color] font-bold">
					Send
				</button>
			</form>
		</div>
	);
}
