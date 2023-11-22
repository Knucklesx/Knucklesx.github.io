"use client";

import axios from "axios";
import { useState } from "react";

interface Waiters {
	id: number;
	name: string;
	total_sale: number;
}

export default function WaitersPage({ waiters }: { waiters: Waiters[] }) {
	const [dataWaiters, setDataWaiters] = useState<Waiters[]>([]);
	const [newWaiterName, setNewWaiterName] = useState("");
	const [isShown, setIsShown] = useState(false);
	const [deleteWaiter, setDeleteWaiter] = useState("");

	const handleDeleteWaiter = async () => {
		await axios.delete(`http://localhost:3001/waiters/delete/${deleteWaiter}`),

		setNewWaiterName("");
	};

	const handleChangeDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDeleteWaiter(e.target.value);
	};


	const handleAddWaiter = async () => {
		try {
			const result = await axios.post(
				"http://localhost:3001/waiters",
				{ name: newWaiterName, total_sale: 10 },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setNewWaiterName("");
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewWaiterName(e.target.value);
	};

	return (
		<div>
			<div>
				<input
					type="text"
					value={newWaiterName}
					onChange={handleChange}
					className="text-black"
				/>
				<button onClick={handleAddWaiter} className="bg-black">
					Add Waiter
				</button>
			</div>
			<div className="p-10">
				<input
					type="text"
					value={deleteWaiter}
					onChange={handleChangeDelete}
					className="text-black"
				/>
				<button onClick={handleDeleteWaiter} className="bg-black">
					Remove Waiter
				</button>
			</div>

			<div className="p-10">
				<button onClick={() => setIsShown(!isShown)} className="bg-black">
					mostrar
				</button>
				<div className="p-10">
					{isShown &&
						waiters.map((waiter: Waiters, id: number) => (
							<div key={id}>
								<p>{waiter.name}</p>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
