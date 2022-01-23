import {
	IoLogoInstagram,
	IoLogoTwitter,
	IoLogoFacebook,
	IoLogoYoutube,
} from "react-icons/io5";

export const footer = {
	widgets: [
		{
			id: 1,
			widgetTitle: "Social",
			lists: [
				{
					id: 1,
					title: "Instagram",
					path: "https://www.instagram.com/simon.uvedoble/",
					icon: <IoLogoInstagram />,
				},
				{
					id: 2,
					title: "Twitter",
					path: "https://www.instagram.com/simon.uvedoble",
					icon: <IoLogoTwitter />,
				},
				{
					id: 3,
					title: "Facebook",
					path: "https://www.instagram.com/simon.uvedoble",
					icon: <IoLogoFacebook />,
				},
				{
					id: 4,
					title: "YouTube",
					path: "https://www.instagram.com/simon.uvedoble",
					icon: <IoLogoYoutube />,
				},
			],
		},
		{
			id: 2,
			widgetTitle: "Contact",
			lists: [
				{
					id: 1,
					title: "Contact Us",
					path: "/contact-us",
				},
				{
					id: 4,
					title: "Phone",
					path: "/",
				},
			],
		},
		{
			id: 3,
			widgetTitle: "Info",
			lists: [
				{
					id: 1,
					title: "FAQ",
					path: "/faq",
				},
				{
					id: 2,
					title: "About Us",
					path: "/contact-us",
				},
				{
					id: 2,
					title: "Terms",
					path: "/terms",
				},
			],
		},
	],
	payment: [
		{
			id: 1,
			path: "/",
			image: "/assets/images/payment/mastercard.svg",
			name: "payment-master-card",
			width: 34,
			height: 20,
		},
		{
			id: 2,
			path: "/",
			image: "/assets/images/payment/visa.svg",
			name: "payment-visa",
			width: 50,
			height: 20,
		},
		{
			id: 3,
			path: "/",
			image: "/assets/images/payment/paypal.svg",
			name: "payment-paypal",
			width: 76,
			height: 20,
		},
		{
			id: 4,
			path: "/",
			image: "/assets/images/payment/jcb.svg",
			name: "payment-jcb",
			width: 26,
			height: 20,
		},
		{
			id: 5,
			path: "/",
			image: "/assets/images/payment/skrill.svg",
			name: "payment-skrill",
			width: 39,
			height: 20,
		},
	],
};
