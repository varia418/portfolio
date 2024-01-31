import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AnimatedLogo from "@/components/AnimatedLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className + " flex h-screen"}>
				<nav className="w-1/6 flex flex-col justify-between p-10 border border-gray-300">
					<AnimatedLogo />
					<ul>
						<li>home</li>
						<li>about</li>
						<li>contact</li>
					</ul>
					<p className="text-center text-sm">
						© 2024 Varia. All Rights Reserved.
					</p>
				</nav>
				<main className="w-5/6 bg-slate-100">{children}</main>
			</body>
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" />
		</html>
	);
}
