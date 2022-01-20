import { NextSeo } from "next-seo";
import Header from "./header/header";
import Footer from "./footer/footer";
import MobileNavigation from "./mobile-navigation/mobile-navigation";

const Layout: React.FC = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<NextSeo
				additionalMetaTags={[
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0",
					},
				]}
				title="Simon Uvedoble Shop - React Next E-commerce Template"
				description="Fast shop"
				canonical=""
				openGraph={{
					url: "https://instagram.com/simon.uvedoble",
					title: "Simon Uvedoble Shop - React Next E-commerce Template",
					description:
						"Simon Uvedoble Shop - React Next E-commerce Template",
					images: [
						{
							url: "/assets/images/cultivos_alimentos.png",
							width: 800,
							height: 600,
							alt: "Og Image Alt",
						},
						{
							url: "/assets/images/cultivos_alimentos.png",
							width: 900,
							height: 800,
							alt: "Og Image Alt Second",
						},
					],
				}}
			/>
			<Header />
			<main
				className="relative flex-grow"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
			</main>
			<Footer />
			{/*<MobileNavigation />*/}
		</div>
	);
};

export default Layout;
