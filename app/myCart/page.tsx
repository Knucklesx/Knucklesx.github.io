"use client";
import { Button, Card, Text } from "@tremor/react";
import { useEffect, useState } from "react";

export default function Page() {
	interface CartItem {
		id: number;
		name: string;
		price: number;
		quantity: number;
		image: string;
	}

	// const [totalMeals, setTotalMeals] = useState<Record<string, number>>(() => {
	// 	return JSON.parse(localStorage.getItem("totalMeals") || "{}");
	// });
	const [totalMeals, setTotalMeals] = useState<Record<string, number>>({});

	const [isDisabled, setIsDisabled] = useState(true);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	// useEffect(() => {
	// 	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	// 	setCartItems(cart);
	// }, []);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const cart = JSON.parse(localStorage.getItem("cart") || "[]");
			setCartItems(cart);
		}
	}, []);
	const handleQuantity = (id: string, action: string) => {
		const currentTotal = totalMeals[id] || 0;
		if (action === "increase") {
			setTotalMeals({ ...totalMeals, [id]: currentTotal + 1 });
			if (currentTotal === 0) {
				setIsDisabled(false);
			}
		} else if (action === "decrease" && currentTotal > 0) {
			setTotalMeals({ ...totalMeals, [id]: currentTotal - 1 });
			if (currentTotal - 1 === 0) {
				setIsDisabled(true);
				const cart = JSON.parse(localStorage.getItem("cart") || "[]");
				const updatedCart = cart.filter((item: any) => item.id !== id);
				localStorage.setItem("cart", JSON.stringify(updatedCart));
			}
		}
	};

	const handleDelete = (id: string) => {
		// Remove a ID do estado totalMeals
		const newTotalMeals = { ...totalMeals };
		delete newTotalMeals[id];
		setTotalMeals(newTotalMeals);

		// Remove a ID do localStorage
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		const updatedCart = cart.filter((item: any) => item.id !== id);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
	};

	return (
		<div className="flex flex-wrap justify-between max-w-1/2 mx-auto">
			<div className="max-w-1/2 mx-auto">
				{cartItems.map((data) => {
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
									style={{
										height: "200px",
										width: "200px",
										objectFit: "cover",
									}}
								/>
							</div>
							<Text>{data.name}</Text>
							<Text>{data.price}</Text>

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
								<Button
									className="border-none"
									onClick={() => handleDelete(data.id.toString())}
								>
									Deletar
								</Button>
							</div>
						</Card>
					);
				})}
				{cartItems.length === 0 && <div>Não há itens no carrinho</div>}
			</div>
			{/* <div>
				<Card>
					<h2>Total</h2>
					<p>
						{cartItems.reduce(
							(acc, item) => acc + item.price * item.quantity,
							0
						)}
					</p>
				</Card>
			</div> */}
			<div className="fixed right-0 border shadow-lg">
				<Card>
					<h2>Total</h2>
					<p>
						{cartItems.reduce(
							(acc, item) => acc + item.price * item.quantity,
							0
						)}
					</p>
				</Card>
			</div>
		</div>
	);
}
