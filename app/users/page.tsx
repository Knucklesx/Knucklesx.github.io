import MyCart from "@/components/MyCartBar";
import MealDrinkPage from "@/components/mealDrinkPage";
import SearchBar from "@/components/seatchBar";
import axios from "axios";

export default async function Page() {
	const { data: dataPratos } = await axios.get("http://localhost:3001/pratos");
	const { data: dataBebidas } = await axios.get(
		"http://localhost:3001/bebidas"
	);

	const { data: dataBurguers } = await axios.get(
		"http://localhost:3001/burguers"
	);
	const { data: dataPromo } = await axios.get(
		"http://localhost:3001/promotion"
	);


	// console.log(dataPromo.data);

	//   const { data } = await axios.get<DescarregoModel[]>('https://vegas.services.do.ciaa.io/admin/descarregos', {
	//     headers: {
	//         Authorization: `Bearer ${session!.access_token}`,
	//     },
	// });

	return (
		<div className="h-screen w-screen">
				<div className="absolute top-0 right-0 h-16 w-16">
					<MyCart />
			</div>
			<SearchBar />
			<MealDrinkPage
				mealData={dataPratos}
				drinkData={dataBebidas}
				burguerData={dataBurguers}
				promoData={dataPromo.data}
			/>
		</div>
	);
}
