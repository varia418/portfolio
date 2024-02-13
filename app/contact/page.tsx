export default function Contact() {
	return (
		<div className="mt-10 primary-color">
			<h1>Contact Me</h1>
            <div>
                <div>Email</div>
                <div>Location</div>
            </div>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" />
                <button>Send Message</button>
            </form>
		</div>
	);
}
