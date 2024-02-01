"use client";

import Image from "next/image";
import NavLinks from "./NavLinks";

function MobileNav() {
	const toggleMobileNav = () => {
		const mobileNav = document.getElementById("mobile-nav");
		if (!mobileNav) return;
		mobileNav.classList.toggle("hidden");
	};

	return (
		<>
			<button
				className="sm:hidden fixed top-10 left-10"
				onClick={toggleMobileNav}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
			<div id="mobile-nav" className="hidden">
				<div
					className="backdrop fixed inset-0 bg-gray-800 opacity-25"
					onClick={toggleMobileNav}
				></div>
				<nav className="md:hidden fixed flex flex-col justify-between inset-0 bg-white w-5/6 p-5">
					<div className="flex justify-between mb-7">
						<Image
							src="https://shuffle.dev/zeus-assets/logo/logo-zeus-red.svg"
							width={70}
							height={70}
							alt="logo"
						/>
						<button className="close-btn" onClick={toggleMobileNav}>
							<svg
								className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								data-config-id="auto-svg-2-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
					</div>
					<NavLinks />
					<a className="rounded bg-red-100 text-red-500 font-medium py-2 px-3 text-center">
						Contact Me
					</a>
					<span className="mt-3 text-sm text-center text-gray-500">
						© 2024 Varia. All Rights Reserved.
					</span>
				</nav>
			</div>
		</>
	);
}

export default MobileNav;
