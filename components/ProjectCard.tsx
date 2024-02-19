import Image from "next/image";
import Link from "next/link";
import React from "react";
import TechnologyTag from "./TechnologyTag";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	technologies: string[];
}

function ProjectCard({
	title,
	description,
	image,
	technologies,
}: ProjectCardProps) {
	const techs = ["react", "bootstrap", "spring boot"];
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
				<div>
					{technologies.map((technology) => (
						<TechnologyTag key={technology} tag={technology} />
					))}
				</div>
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
