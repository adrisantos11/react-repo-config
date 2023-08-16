module.exports = function (plop) {
	plop.setGenerator("React component generator", {
		description: "A generator for SM Library components",
		prompts: [
			{
				type: "list",
				name: "type",
				choices: ["Component", "Widget", "Page"],
				message: "Choose the new component type:",
			},
			{
				type: "input",
				name: "name",
				message: "Name in PascalCase (ThisIsAnExample):",
			},
			{
				type: "input",
				name: "description",
				message: "Describe the component purpose in few words:",
			},
			{
				when(context) {
					return context.type.includes("Page");
				},
				type: "input",
				name: "url",
				message: "Insert the url of the page (start with /):",
			},
		],
		actions: (answers) => {
			const actions = [];
			// const literalRegex = new RegExp(
			// 	`"${answers.type.toLowerCase()}s": {`,
			// 	"g"
			// );
			actions.push({
				type: "addMany",
				destination: "src/{{toSnakeCase type}}s/{{name}}",
				base: "plop_templates/{{toLowerCase type}}",
				templateFiles: "plop_templates/{{toLowerCase type}}/*",
			});

			return actions;
		},
	});

	plop.setHelper("toLowerCase", function (text) {
		return text.toLowerCase();
	});

	// PascalCase to KebabCase => ThisIsAnExample: this-is-an-example
	plop.setHelper("toKebabCase", function (text) {
		let newText = "";
		[...text].forEach((letter, index) => {
			if (letter === letter.toUpperCase() && index !== 0)
				newText += `-${letter.toLowerCase()}`;
			else newText += letter.toLowerCase();
		});
		return newText;
	});

	// PascalCase to SnakeCase => ThisIsAnExample: this_is_an_example
	plop.setHelper("toSnakeCase", function (text) {
		let newText = "";
		[...text].forEach((letter, index) => {
			if (letter === letter.toUpperCase() && index !== 0)
				newText += `_${letter.toLowerCase()}`;
			else newText += letter.toLowerCase();
		});
		return newText;
	});
};
