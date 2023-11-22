"use client";
import { ItemsListModel } from "@/lib/itemsListModel";
import { Card, Text } from "@tremor/react";

interface MyDrinksProps {
	drinkList: ItemsListModel[];
}

export default function MyDrinks({ drinkList }: MyDrinksProps) {


	if (drinkList === null) {
		return <div>Loading...</div>;
	}

	return (
		
		<div className="flex flex-wrap justify-between max-w-1/2 mx-auto">
			{drinkList.map((data) => {
				return (
					<Card key={data.id} className="flex-1 m-2">
						<img src={data.image} alt={data.name} className="w-full h-auto" />
						<Text>{data.name}</Text>
						<Text>{data.price}</Text>
					</Card>
				);
			})}


		</div>
	);
}
