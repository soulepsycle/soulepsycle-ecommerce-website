import React from "react";

const Header = ({
	title,
	description,
}: {
	title: string;
	description?: string;
}) => {
	return (
		<div className="flex flex-col">
			<h1 className="text-4xl">{title}</h1>
			{description && (
				<p className="text-muted-foreground text-sm">{description}</p>
			)}
		</div>
	);
};

export default Header;
