import { useRedux } from "@/redux/hooks";
import Link from "next/link";

export default function School() {
	const { school } = useRedux();
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
			<h1 className="text-2xl font-bold">School Page</h1>
			{/* Buraya çark yap bir adet */}
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-xl font-semibold">Okul Bilgileri</h3>
				Ad:{school.name}
				Numara:{school.number}
				<Link
					href="/"
					className="flex h-14 w-40 items-center justify-center rounded-md bg-slate-500 text-white ">
					Turn The Wheel
				</Link>
			</div>
		</div>
	);
}
