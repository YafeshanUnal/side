import { useRedux } from "@/redux/hooks";
import { setFoods } from "@/redux/requests";
import Link from "next/link";
import { useState } from "react";

export default function Wheel() {
	const { foods } = useRedux();

	const [food, setFood] = useState({
		name: "",
	});
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
			<h1 className="text-2xl font-bold">Wheel Page</h1>
			{/* Buraya çark yap bir adet */}
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-xl font-semibold">Please Turn The Wheel</h3>
				<Link
					href="/"
					className="flex h-14 w-40 items-center justify-center rounded-md bg-slate-500 text-white ">
					Turn The Wheel
				</Link>
			</div>
			<h1>Bababa</h1>
			<h1>{foods.name}</h1>
			<div>
				<input
					placeholder="First Name"
					type="text"
					onChange={(e) => {
						setFood({
							...food,
							name: e.target.value,
						});
					}}
				/>
			</div>
			<div>
				<button
					onClick={() => {
						setFoods({
							foods: food,
						});
					}}>
					Button
				</button>
			</div>
		</div>
	);
}
