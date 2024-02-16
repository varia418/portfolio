import Image from "next/image";

export default function Skills() {
	return (
		<div className="p-10 relative">
			<h1 className="mb-8 text-3xl font-bold relative">
				Skills
				<span className="absolute bg-[--primary-color] h-1 w-12 left-0 -bottom-2"></span>
				<span className="absolute bg-[--primary-color] h-1 w-8 left-0 -bottom-4"></span>
			</h1>
			<div className="h-full flex justify-center">
				<div className="container mx-auto p-10 bg-white rounded-lg">
					<div>
						<Image
							src={"/images/logos/html-logo.png"}
							width={75}
							height={75}
							alt="HTML"
						/>
						<span>HTML</span>
					</div>
				</div>
			</div>
		</div>
	);
}
