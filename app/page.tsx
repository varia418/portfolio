import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="py-10 flex h-full justify-center items-center sm:gap-20 flex-col sm:flex-row gap-10">
			<div className="flex justify-end">
				<Image
					src="/images/avatar.jpg"
					width={300}
					height={300}
					alt="avatar"
				/>
			</div>
			<div className="text-2xl font-medium text-slate-700 basis-1/3 text-center sm:text-left">
				<p>Hi there! I'm</p>
				<h3 className="primary-color font-bold text-5xl my-4">Varia</h3>
				<p>
					A{" "}
					<span className="primary-color">
						Full Stack Web Developer
					</span>{" "}
					with a passion for crafting responsive and dynamic websites.
				</p>
				<Link href="/CV_Le_Thanh_Nhan_en.pdf" target="_blank">
					<button className="primary-button">Resume</button>
				</Link>
			</div>
		</div>
	);
}
