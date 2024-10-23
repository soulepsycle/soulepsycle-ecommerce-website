export function formatCategory(category: string): string {
	return category
		.split("-") // Split by hyphen ("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
		.join(" "); // Join back with spaces
}
