import React from "react";

function TechnologyTag({ tag }: { tag: string }) {
	return (
		<span className="border rounded-2xl py-1 px-2 text-sm">{tag}</span>
	);
}

export default TechnologyTag;
