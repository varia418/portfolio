"use client";

import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function AnimatedLogo() {
	useEffect(() => {
		// Wrap every letter in a span
		var textWrapper = document.querySelector(".ml11 .letters");
		if (!textWrapper) return;

		textWrapper.innerHTML = textWrapper.textContent!.replace(
			/([^\x00-\x80]|\w)/g,
			"<span class='letter'>$&</span>"
		);

		anime
			.timeline({ loop: true })
			.add({
				targets: ".ml11 .line",
				scaleY: [0, 1],
				opacity: [0.5, 1],
				easing: "easeOutExpo",
				duration: 700,
			})
			.add({
				targets: ".ml11 .line",
				translateX: [
					0,
					document!
						.querySelector(".ml11 .letters")!
						.getBoundingClientRect().width + 10,
				],
				easing: "easeOutExpo",
				duration: 700,
				delay: 100,
			})
			.add({
				targets: ".ml11 .letter",
				opacity: [0, 1],
				easing: "easeOutExpo",
				duration: 600,
				offset: "-=775",
				delay: (el, i) => 34 * (i + 1),
			})
			.add({
				targets: ".ml11",
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});
	});
	return (
		<div>
			<h1 className="ml11 text-center">
				<span className="text-wrapper primary-color">
					<span className="line line1 primary-color"></span>
					<span className="letters primary-color">Varia</span>
				</span>
			</h1>
		</div>
	);
}

export default AnimatedLogo;
