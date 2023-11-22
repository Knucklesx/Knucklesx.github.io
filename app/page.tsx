import FrontPage from "@/components/frontpage";

export default function Home() {
	return (
		<>
			<div className="container mx-auto px-4 h-full">
				<div className="flex content-center items-center justify-center h-full">
					<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
						<FrontPage />
					</div>
				</div>
			</div>
		</>
	);
}
