import { Flex, Link, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import {siteSettings} from "@settings/site-settings";

export const MobileNav = () => {
	const { site_header } = siteSettings;

	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			p={4}
			display={{ md: 'none' }}>
			{site_header.menu.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

interface INavItem {
	label: string;
	href?: string;
}


const MobileNavItem = ({ label, href }: INavItem) => {
	return (
		<Stack spacing={4}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}>
				<Text
					fontWeight={600}
					color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
			</Flex>
		</Stack>
	);
};