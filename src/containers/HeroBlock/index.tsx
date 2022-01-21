import { useWindowSize } from "@utils/use-window-size";
import { SwiperSlide } from "swiper/react";
import Carousel from "@components/ui/carousel";
import {heroBanner} from "@pages/home/config";
import BannerCard from "@components/ui/BannerCard";
import {ROUTES} from "@settings/routes";

const breakpoints = {
	"1500": {
		slidesPerView: 2,
	},
	"0": {
		slidesPerView: 1,
	},
};

const HeroBlock: React.FC = () => {
	const { width } = useWindowSize();
	return (
		<div className="heroBannerOne relative max-w-[1920px] mb-5 md:mb-12 lg:mb-14 2xl:mb-16 mx-auto overflow-hidden">
			<Carousel
				loop={true}
				breakpoints={breakpoints}
				centeredSlides={width < 1500 ? false : true}
				autoplay={{
					delay: 5000,
				}}
				className="mx-0"
				buttonGroupClassName="hidden"
				pagination={{
					clickable: true,
				}}
			>
				{heroBanner?.map((banner: any) => (
					<SwiperSlide
						className="carouselItem px-0 2xl:px-3.5"
						key={`banner--key-${banner?.id}`}
					>
						<BannerCard
							banner={banner}
							href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default HeroBlock;
