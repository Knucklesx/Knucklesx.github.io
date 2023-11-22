"use client";
import { ItemsListModel } from "@/lib/itemsListModel";
import { Button, Card, Text } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface MyItemsListProps {
	list: ItemsListModel[];
}

export default function MyItemsList({ list }: MyItemsListProps) {
	const router = useRouter();
	// const [totalMeals, setTotalMeals] = useState<Record<string, number>>({});
	// const [totalMeals, setTotalMeals] = useState<Record<string, number>>(() => {
	// 	return JSON.parse(localStorage.getItem("totalMeals") || "{}");
	// });
	const [totalMeals, setTotalMeals] = useState<Record<string, number>>({});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const totalMeals = JSON.parse(localStorage.getItem("totalMeals") || "{}");
			setTotalMeals(totalMeals);
		}
	}, []);
	const [isDisabled, setIsDisabled] = useState(true);

	const handleQuantity = (id: string, action: string) => {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		const currentTotal = totalMeals[id] || 0;
		// if (action === "increase") {
		// 	setTotalMeals({ ...totalMeals, [id]: currentTotal + 1 });
		if (action === "increase") {
			const newTotalMeals = { ...totalMeals, [id]: currentTotal + 1 };
			setTotalMeals(newTotalMeals);
			localStorage.setItem("totalMeals", JSON.stringify(newTotalMeals));
			if (currentTotal === 0) {
				setIsDisabled(false);
			}
			// } else if (action === "decrease" && currentTotal > 0) {
			// 	setTotalMeals({ ...totalMeals, [id]: currentTotal - 1 });
			// 	if (currentTotal - 1 === 0) {
		} else if (action === "decrease" && currentTotal > 0) {
			const newTotalMeals = { ...totalMeals, [id]: currentTotal - 1 };
			setTotalMeals(newTotalMeals);
			localStorage.setItem("totalMeals", JSON.stringify(newTotalMeals));
			setIsDisabled(true);
			const cart = JSON.parse(localStorage.getItem("cart") || "[]");
			const updatedCart = cart.filter((item: any) => item.id !== id);
			localStorage.setItem("cart", JSON.stringify(updatedCart));
		}
	};

	const handleBuy = (
		id: string,
		name: string,
		price: number,
		quantity: number,
		image: string
	) => {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		const itemIndex = cart.findIndex((item: any) => item.id === id);
		const newTotalMeals = { ...totalMeals, [id]: quantity };
    setTotalMeals(newTotalMeals);
    localStorage.setItem('totalMeals', JSON.stringify(newTotalMeals));
		if (itemIndex > -1) {
			cart[itemIndex].quantity = quantity;
		} else {
			cart.push({ id, name, price, quantity, image });
		}

		if (quantity === 0) {
			cart.splice(itemIndex, 1);
		}

		localStorage.setItem("cart", JSON.stringify(cart));
	};

	if (list === null) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-wrap justify-between max-w-1/2 mx-auto">
			{list.map((data) => {
				const totalMeal = totalMeals[data.id] || 0;
				return (
					<Card
						key={data.id}
						className="flex-1 m-2 border border-red-500 flex flex-col items-center text-center"
					>
						<div className="w-full">
							<img
								src={data.image}
								alt={data.name}
								className="w-full h-auto mx-auto"
								style={{ height: "200px", width: "200px", objectFit: "cover" }}
							/>
						</div>
						<Text>{data.name}</Text>
						{/* <Text>{data.price}</Text> */}
						<Text>Item Price: {data.price}</Text>

						<div className="flex justify-center items-center">
							<Button
								className="border-none"
								onClick={() => handleQuantity(data.id.toString(), "increase")}
							>
								+
							</Button>
							<input
								type="number"
								value={totalMeal}
								readOnly
								className="text-black mx-2 w-10"
							/>
							{/* {totalMeal > 0 && ( */}
							<Button
								className="border-none"
								disabled={totalMeal === 0}
								onClick={() => handleQuantity(data.id.toString(), "decrease")}
							>
								-
							</Button>
							{/* )} */}
						</div>
						<Button
							className="border-solid bg-green-500 text-white m-5 "
							disabled={totalMeal === 0}
							onClick={() =>
								handleBuy(
									data.id.toString(),
									data.name,
									data.price,
									totalMeal,
									data.image
								)
							}
						>
							Comprar
						</Button>
					</Card>
				);
			})}
		</div>
	);
}
