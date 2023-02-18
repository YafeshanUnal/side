import { setSchools } from "@/redux/requests";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [school, setSchool] = useState({
		name: "",
		number: "",
	});
	return (
		<div className="flex w-screen flex-col items-center justify-center gap-10 space-x-10 pt-10">
			<header className="flex flex-col items-center justify-center gap-2 text-2xl">
				<h1 className="font-bold">Welcome TO What Cook Today</h1>
				<h3 className="font-semibold">Please Turn The Wheel</h3>
			</header>
			<Link
				className="flex h-14 w-40 items-center justify-center rounded-md bg-slate-500 text-white "
				href={"/wheel"}>
				Go To Wheel Page
			</Link>
			<Link
				className="flex h-14 w-40 items-center justify-center rounded-md bg-slate-500 text-white "
				href={"/school"}>
				Go To School Page
			</Link>
			<div>
				<input
					placeholder="Name"
					type="text"
					onChange={(e) => {
						setSchool({
							...school,
							name: e.target.value,
						});
					}}
				/>
			</div>
			<div>
				<input
					placeholder="Number"
					type="number"
					onChange={(e) => {
						setSchool({
							...school,
							number: e.target.value,
						});
					}}
				/>
			</div>
			<div>
				<button
					onClick={() => {
						setSchools({
							school: school,
						});
					}}>
					Button
				</button>
			</div>
		</div>
	);
}
