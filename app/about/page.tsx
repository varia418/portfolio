export default function About() {
	return (
		<div className="p-10 relative">
			<h1 className="mb-8 text-3xl font-bold relative">
				About Me
				<span className="absolute bg-[--primary-color] h-1 w-12 left-0 -bottom-2"></span>
				<span className="absolute bg-[--primary-color] h-1 w-8 left-0 -bottom-4"></span>
			</h1>
			<div className="h-full flex justify-center">
				<div className="container mx-auto p-10 bg-white rounded-lg">
					<p className="text-xl">
						I am a proficient full stack developer with diverse
						expertise in the realm of web application development.
						Possessing a comprehensive understanding of both the
						front-end and back-end domains, I demonstrate
						proficiency in conceiving and implementing intricate
						systems from inception to fruition.
					</p>
					<p className="text-xl">
						Throughout my educational and professional journey, I
						have amassed knowledge across various technologies such
						as React, Next.js, Express.js, MongoDB, and MySQL.
					</p>
					<p className="text-xl">
						I ardently embrace learning opportunities and willingly
						subject myself to challenges, continuously advancing my
						skills and fostering creative capabilities in the
						construction of technological products.
					</p>
				</div>
			</div>
		</div>
	);
}
