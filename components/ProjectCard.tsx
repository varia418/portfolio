import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
}

function ProjectCard({ title, description, image }: ProjectCardProps) {
	return (
		<div className="border rounded-lg p-4 flex gap-5">
			<Image
				src={image}
				width={350}
				height={250}
				className="rounded-lg border"
				alt={title}
			/>
			<div className="flex flex-col">
				<h2 className="text-xl font-semibold">{title}</h2>
				<p>{description}</p>
				<div className="mt-auto">
					<Link
						href={`/works/${title}`}
						className="mr-4 font-semibold cool-link"
					>
						Live
					</Link>
					<Link
						href={`/works/${title}`}
						className="font-semibold cool-link"
					>
						Repo
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
