import { ItemsListModel } from "@/lib/itemsListModel";
import { Flex, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import PropTypes from "prop-types";
import MyItemsList from "./mealDrink/mealDB.clientside";
import MyPromo from "./mealDrink/promoDB";

MealDrinkPage.defaultProps = {
	mealData: [],
	drinkData: [],
	burguerData: [],
	promoData: {
		promoBurguer: [],
		promoPrato: []
	},
};

MealDrinkPage.propTypes = {
	mealData: PropTypes.arrayOf(PropTypes.object).isRequired,
	drinkData: PropTypes.arrayOf(PropTypes.object).isRequired,
	burguerData: PropTypes.arrayOf(PropTypes.object).isRequired,
	// promoData: PropTypes.arrayOf(PropTypes.object).isRequired,
	promoData: PropTypes.shape({
    data: PropTypes.shape({
      Burguer: PropTypes.arrayOf(PropTypes.object),
      Prato: PropTypes.arrayOf(PropTypes.object),
    })
  }).isRequired,
};

export interface MealDrinkPageProps {
	mealData: 		ItemsListModel[],
	drinkData: 		ItemsListModel[],
	burguerData: 		ItemsListModel[],
	promoData: {
		promoBurguer: ItemsListModel[],
		promoPrato: ItemsListModel[]
	},
}

const defaultProps: MealDrinkPageProps = {
	mealData:[],
	drinkData: [],
	burguerData: [],
	promoData: {
		promoBurguer: [],
		promoPrato: []
	},
};

interface MyPromoProps {
		promoBurguer: ItemsListModel[];
		promoPrato: ItemsListModel[];
	}

export default async function MealDrinkPage({
mealData,
drinkData,
burguerData,
promoData
}: MealDrinkPageProps = defaultProps) {

	console.log(promoData.promoBurguer, promoData.promoPrato)




	return (
		<TabGroup className="pt-10">
			<TabList className="mt-8">
				<Tab>Promoção</Tab>
				<Tab>Frutos do Mar</Tab>
				<Tab>Burguers</Tab>
				<Tab>Bebidas</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
						<Flex className="mt-4">
									<MyPromo
										promoData={promoData}
									/>
						</Flex>
				</TabPanel>
<TabPanel>
						<Flex className="mt-4">
								<MyItemsList list={mealData} />
						</Flex>
				</TabPanel>
								<TabPanel>
						<Flex className="mt-4">
								<MyItemsList  list={burguerData} />
						</Flex>
				</TabPanel>
				<TabPanel>
						<Flex className="mt-4">
								<MyItemsList list={drinkData} />
						</Flex>
				</TabPanel>
			</TabPanels>
		</TabGroup> 
	);
}
