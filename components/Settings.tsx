"use client";
import { useEffect } from "react";
import "@/loader";

function Settings() {
	useEffect(() => {
		$("#theme-picker")
			.children()
			.click(function () {
				$("#theme-picker").children().removeClass("selected");
				$(this).addClass("selected");
				var val = $(this).attr("data-value");
			});

		$("#primary-color-picker")
			.children()
			.click(function () {
				$("#primary-color-picker")
					.children()
					.each((index, elem) => {
						const color = $(elem).attr("data-value");
						$(elem).removeClass(`border-${color}-500`);
					});
				var selectedColor = $(this).attr("data-value");
				$(this).addClass(`border-${selectedColor}-500`);
			});

		return () => {
			$("#theme-picker").children().unbind("click");
			$("#primary-color-picker").children().unbind("click");
		};
	});

	function toggleSettings(event: React.MouseEvent<HTMLElement>) {
		const settingBox = $(event.target).closest("div");
		settingBox.toggleClass("translate-x-full mr-10");
	}

	return (
		<div className="flex fixed bottom-10 right-0 items-end translate-x-full mr-10 duration-200">
			<button
				className="p-2 border border-gray-300 h-fit bg-white"
				onClick={toggleSettings}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
					/>
				</svg>
			</button>
			<div className="bg-white border border-gray-300 p-3">
				<h3 className="font-bold border-b mb-2 text-center border-slate-500">
					Theme
				</h3>
				<div id="theme-picker" className="flex justify-evenly">
					<div
						className="inline-block cursor-pointer rounded-full border-2 size-6"
						data-value="light"
					>
						<div className="inline-block cursor-pointer rounded-full border border-black size-5 bg-white"></div>
					</div>
					<div
						className="inline-block cursor-pointer rounded-full border-2 size-6"
						data-value="dark"
					>
						<div className="inline-block cursor-pointer rounded-full border border-black size-5 bg-black"></div>
					</div>
				</div>
				<h3 className="font-bold border-b my-2 text-center border-slate-500">
					Primary color
				</h3>
				<div
					id="primary-color-picker"
					className="radio-group flex justify-evenly"
				>
					<div
						className="inline-block cursor-pointer rounded-full border-2 size-6"
						data-value="red"
					>
						<div className="inline-block cursor-pointer rounded-full border border-white size-5 bg-red-500"></div>
					</div>
					<div
						className="inline-block cursor-pointer rounded-full border-2 size-6"
						data-value="blue"
					>
						<div className="inline-block cursor-pointer rounded-full border border-white size-5 bg-blue-500"></div>
					</div>
					<div
						className="inline-block cursor-pointer rounded-full border-2 size-6"
						data-value="green"
					>
						<div className="inline-block cursor-pointer rounded-full border border-white size-5 bg-green-500"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;
