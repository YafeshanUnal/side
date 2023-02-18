import * as actions from "./slice";
import { store } from "./store";
export const setFoods = (foods: any) => store.dispatch(actions.setFood(foods));
export const setSchools = (school: any) =>
	store.dispatch(actions.setSchool(school));
