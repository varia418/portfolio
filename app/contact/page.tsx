export default function Contact() {
	return (
		<div className="mt-10 border bg-white rounded-lg p-10">
			<h1 className="primary-color">Contact Me</h1>
			<div>
				<div>Email</div>
				<div>Location</div>
			</div>
			<form>
				<input className="border" placeholder="Name" />
				<input className="border" placeholder="Email" />
				<input className="border" placeholder="Subject" />
				<textarea className="border" placeholder="Message" />
				<button className="bg-[--primary-color] border-2 border-[--primary-color] text-white rounded-full px-5 py-2 mt-4 hover:bg-slate-200 hover:text-[--primary-color] font-bold">
					Send
				</button>
			</form>
		</div>
	);
}
