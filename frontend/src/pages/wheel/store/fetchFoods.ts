import { setFoods } from "@/redux/requests";

export const fetchFoods = async () => {
	const response = await fetch("http://localhost:5173/FoodControllers/foods", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		mode: "no-cors",
	});
	console.log(response);
	setFoods(response);
	return response;
};
