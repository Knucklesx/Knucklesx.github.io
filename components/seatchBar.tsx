"use client"

import { ChangeEvent, useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  
  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(search)
  }

	return (
		<div className="flex flex-col items-center justify-center w-screen pt-10">
			<div>
				<input type="text" placeholder="Pesquisar" onChange={handleSearch} className="text-black"/>
			</div>
		</div>
	);
}
