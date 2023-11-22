"use client";
import { ItemsListModel } from "@/lib/itemsListModel";
import { Card, Text } from "@tremor/react";

interface MyBurguersProps {
	burguerList: ItemsListModel[];
}

export default function MyBurguers({ burguerList }: MyBurguersProps) {


	if (burguerList === null) {
		return <div>Loading...</div>;
	}

	return (
		
		<div className="flex flex-wrap justify-between max-w-1/2 mx-auto">
			{burguerList.map((data) => {
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
