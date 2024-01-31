import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
			<body className={inter.className + " flex"}>
				<nav className="w-1/6 flex flex-col">
                    <div>logo</div>
                    <ul>pages</ul>
                    <div>copyrights</div>
                </nav>
				<main className="w-5/6">{children}</main>
			</body>
		</html>
	);
}
