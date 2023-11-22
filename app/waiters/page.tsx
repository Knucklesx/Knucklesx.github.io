import WaitersPage from "@/components/waiters";
import axios from "axios";
interface Waiters {
	id: number;
	name: string;
  total_sale: number;
}
export default async function Page() {
	const { data: dataWaiters } = await axios.get<Waiters[]>(
		"http://localhost:3001/waiters"
	);

  return (
    <WaitersPage waiters={dataWaiters} />
  )
}
