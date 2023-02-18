import { useSelector } from "react-redux";

export const useRedux = () => {
	const foods = useSelector((state: any) => state.slice.foods);
	const school = useSelector((state: any) => state.slice.school);

	return { foods, school };
};
