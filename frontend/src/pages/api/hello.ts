import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();
handler.get(async (req, res) => {
	const response = await fetch("http://localhost:5173/FoodControllers/foods");
	console.log(res.json(response));
});

export default handler;
