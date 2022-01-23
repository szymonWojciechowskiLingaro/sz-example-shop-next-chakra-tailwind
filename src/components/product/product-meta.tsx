import { useState } from "react";
import { Collapse } from "@components/common/Accordion";

interface Props {
	data: any;
}

const ProductMeta: React.FC<Props> = ({ data }) => {
	const [expanded, setExpanded] = useState<number>(0);
	return (
		<>
			{data?.meta.map((item: any, index: any) => (
				<Collapse
					i={index}
					key={item.title}
					title={item.title}
					translatorNS="review"
					content={
						data?.meta.length === item.id ? (
							<>
								{item.content}
							</>
						) : (
							item.content
						)
					}
					expanded={expanded}
					setExpanded={setExpanded}
					variant="transparent"
				/>
			))}
		</>
	);
};

export default ProductMeta;
