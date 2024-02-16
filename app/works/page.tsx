import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Works() {
	const projects = [
		{
			title: "Schedule Board",
			description:
				"A scheduling application aids users in managing time and planning effectively. It enables you to create, edit, and track events, meetings, tasks, and share schedules with others for synchronized time management. Moreover, it allows you to monitor the progress of tasks.",
			image: "/images/confidential.jpg",
		},
		{
			title: "UIT Chat",
			description:
				"A chat application specially designed for individuals seeking to connect with friends, family, and colleagues. This application provides an online chat platform through text and voice calls, offering the ability to create private or public chat rooms.",
			image: "/images/uit-chat.png",
		},
		{
			title: "Diamond Jewelry",
			description:
				"A visually appealing and user-friendly jewelry business website, providing detailed information about products and prices, allowing customers to easily search for products.",
			image: "/images/diamond-jewelry.png",
		},
	];
	return (
		<div className="p-10 relative">
			<h1 className="mb-8 text-3xl font-bold relative">
				Works
				<span className="absolute bg-[--primary-color] h-1 w-12 left-0 -bottom-2"></span>
				<span className="absolute bg-[--primary-color] h-1 w-8 left-0 -bottom-4"></span>
			</h1>
			<div className="h-full flex justify-center">
				<div className="container mx-auto p-10 bg-white rounded-lg flex flex-col gap-4">
					{projects.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>
			</div>
		</div>
	);
}
