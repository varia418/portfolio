import Image from "next/image";
import Link from "next/link";
import React from "react";
import TechnologyTag from "./TechnologyTag";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	url?: string;
	repo?: string;
}

function ProjectCard({
	title,
	description,
	image,
	technologies,
	url,
	repo,
}: ProjectCardProps) {
	const techs = ["react", "bootstrap", "spring boot"];
	return (
		<div className="border rounded-lg p-4 flex flex-col sm:flex-row gap-5">
			<Image
				src={image}
				width={350}
				height={170}
				className="rounded-lg border"
				alt={title}
			/>
			<div className="flex flex-col">
				<h2 className="text-xl font-semibold">{title}</h2>
				<p>{description}</p>
				<div className="flex flex-wrap gap-2">
					{technologies.map((technology) => (
						<TechnologyTag key={technology} tag={technology} />
					))}
				</div>
				<div className="mt-auto pt-2">
					{url && (
						<Link
							href={url}
							className="mr-4 font-semibold cool-link"
							target="_blank"
						>
							Live
						</Link>
					)}
					{repo && (
						<Link
							href={repo}
							className="font-semibold cool-link"
							target="_blank"
						>
							Repo
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
