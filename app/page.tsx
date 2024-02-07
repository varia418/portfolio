import Image from "next/image";

export default function Home() {
	return (
		<div className="py-10 flex h-full justify-center items-center gap-20">
			<div className="basis-1/3 flex justify-center">
				<Image
					src="/avatar.jpg"
					width={300}
					height={300}
					alt="avatar"
				/>
			</div>
			<div className="text-2xl font-medium text-slate-700 basis-1/3">
				<p>Hi there! I'm</p>
				<h3 className="primary-color font-bold text-5xl my-4">Varia</h3>
				<p>
					A{" "}
					<span className="primary-color">
						Full Stack Web Developer
					</span>{" "}
					with a passion for crafting responsive and dynamic websites.
				</p>
				<button className="bg-[--primary-color] border-2 border-[--primary-color] text-white rounded-full px-5 py-2 mt-4 hover:bg-slate-200 hover:text-[--primary-color]">
					Resume
				</button>
			</div>
		</div>
	);
}
