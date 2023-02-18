import { fetchFoods } from "@/pages/wheel/store/fetchFoods";

export default async () => {
	const response = await fetchFoods();

	console.log("asdf" + response);
	return response;
};
