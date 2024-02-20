import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="py-10 flex h-full justify-center items-center sm:gap-20 flex-col sm:flex-row gap-10">
			<div className="flex justify-end">
				<Image
					src="/images/avatar.jpg"
					width={300}
					height={300}
					alt="avatar"
				/>
			</div>
			<div className="text-2xl font-medium text-slate-700 basis-1/3 text-center sm:text-left">
				<p>Hi there! I'm</p>
				<h3 className="primary-color font-bold text-5xl my-4">Varia</h3>
				<p>
					A{" "}
					<span className="primary-color">
						Full Stack Web Developer
					</span>{" "}
					with a passion for crafting responsive and dynamic websites.
				</p>
				<div className="mt-4 flex gap-8">
					<Link href="/CV_Le_Thanh_Nhan_en.pdf" target="_blank">
						<button className="primary-button">Resume</button>
					</Link>
					<div className="flex gap-2">
						<Link href="/CV_Le_Thanh_Nhan_en.pdf" target="_blank">
							<button className="rounded-lg border border-slate-300 p-2 bg-white">
								<svg
									viewBox="0 0 24 24"
									aria-hidden="true"
									className="size-8 fill-slate-900"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
									></path>
								</svg>
							</button>
						</Link>
						<Link href="/CV_Le_Thanh_Nhan_en.pdf" target="_blank">
							<button className="rounded-lg border border-slate-300 p-2 bg-white">
								<svg
									// style="color: rgb(111, 218, 68);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									className="size-8"
								>
									<path
										d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM270.8 274.3c5.2 8.4 23.6 29.9 51.5 29.9v0c25.2 0 44.9-20.2 44.9-49.7s-19.4-49.7-44.9-49.7s-44.9 16.7-51.5 69.5zm-26.7-41.8c7.3-30.5 32.7-60.1 78.2-60.1l0 0c45.1 0 80.9 35.2 80.9 82.2s-35.9 81.9-80.9 81.9c-.6 0-1.1 0-1.7 0c-.5 0-1.1 0-1.6 0h-.1c-14.5-.5-28.7-4.8-40.9-12.6c-4.7-2.8-9.1-6-13.4-9.5l-12.8 78.4H214.9l19.4-110.6c-20.8-29.1-31.6-62.4-36.2-79.7V255c0 48-30.5 81.5-74.2 81.5c-22 0-41-8-54.8-23.3c-13.4-14.8-20.8-35.5-20.8-58.3V176.8H84.5l-.3 78.2c0 28.4 14.5 49.3 39.8 49.3s38.2-20.9 38.2-49.3V176.8h62.8c4.8 19.3 10.9 40.1 19.2 55.6z"
										fill="#6fda44"
									></path>
								</svg>
							</button>
						</Link>
						<Link href="/CV_Le_Thanh_Nhan_en.pdf" target="_blank">
							<button className="rounded-lg border border-slate-300 p-2 bg-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="size-8"
								>
									<path
										fill="#007ab5"
										d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
									/>
								</svg>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
