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
				<div className="container mx-auto p-10 bg-white rounded-lg grid grid-cols-7 gap-7 justify-stretch">
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/html-logo.png"}
							width={75}
							height={75}
							className=""
							alt="HTML"
						/>
						<span>HTML</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/css-logo.png"}
							width={75}
							height={75}
							className=""
							alt="CSS"
						/>
						<span>CSS</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/sass-logo.png"}
							width={75}
							height={75}
							className=""
							alt="SASS"
						/>
						<span>SASS</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/javascript-logo.png"}
							width={75}
							height={75}
							className=""
							alt="Javascript"
						/>
						<span>Javascript</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/jquery-logo.png"}
							width={75}
							height={75}
							className=""
							alt="JQuery"
						/>
						<span>JQuery</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/bootstrap-logo.png"}
							width={75}
							height={75}
							className=""
							alt="Bootstrap"
						/>
						<span>Bootstrap</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/tailwindcss-logo.png"}
							width={75}
							height={75}
							className=""
							alt="Tailwind CSS"
						/>
						<span>Tailwind CSS</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/react-logo.png"}
							width={75}
							height={75}
							className=""
							alt="React"
						/>
						<span>React</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/nextjs-logo.png"}
							width={75}
							height={75}
							className=""
							alt="Next.js"
						/>
						<span>Next.js</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/expressjs-logo.png"}
							width={75}
							height={75}
							className=""
							alt="Express.js"
						/>
						<span>Express.js</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/mongodb-logo.png"}
							width={75}
							height={75}
							className=""
							alt="MongoDB"
						/>
						<span>MongoDB</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/mysql-logo.png"}
							width={75}
							height={75}
							className=""
							alt="MySQL"
						/>
						<span>MySQL</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/rest-api-logo.webp"}
							width={75}
							height={75}
							className=""
							alt="REST API"
						/>
						<span>REST API</span>
					</div>
					<div className="flex flex-col justify-between items-center h-32 p-3">
						<Image
							src={"/images/logos/git-logo.png"}
							width={75}
							height={75}
							className=""
							alt="Git"
						/>
						<span>Git</span>
					</div>
				</div>
			</div>
		</div>
	);
}
