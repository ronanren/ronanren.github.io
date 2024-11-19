export const DATA = {
	name: "Ronan Renoux",
	initials: "RR",
	avatarUrl: "/ronanren.github.io/profile.png",
	url: "https://ronanren.github.io",
	description: "Engineer graduate, now a freelance dev. Building cool things, solving problems, and helping people over the world!",
	summary:
		"In September 2024, I graduated as an engineer from [ENSSAT](https://www.enssat.fr) in France and started working as a **freelance developer**. During a 4-year work-study at [Rennes Métropole](https://metropole.rennes.fr), I gained experience in **GIS** and **web development**. I worked as a **Web3 developer** at a Swiss startup, deepening my passion for **decentralized technologies**. Now, I work remotely, specializing in **web development**, **automation**, and **Web3**, collaborating with clients worldwide 🌍.",
	photos: [
		"/ronanren.github.io/photos/image1.jpeg",
		"/ronanren.github.io/photos/image2.jpeg",
		"/ronanren.github.io/photos/image3.jpeg",
		"/ronanren.github.io/photos/image4.jpeg",
		"/ronanren.github.io/photos/image5.jpeg",
		"/ronanren.github.io/photos/image6.jpeg",
		"/ronanren.github.io/photos/image7.jpeg",
	],
	works: [
		{
			title: "Rennes Métropole",
			role: "GIS/Web Developer",
			start: "Sept 2020",
			end: "Sept 2024",
			logo: "/ronanren.github.io/logos/rennes-metropole.png",
			description: "Work-study in the GIS department, developing web applications for Rennes Métropole. Managed projects using Agile methodologies. Analyzed requirements, designed solutions, and documented specifications. Developed web applications using JavaScript, HTML5/ CSS3, PHP, Symfony, and Twig. Implemented CI / CD pipelines with GitLab CI, Docker, and Jenkins. Worked with PostgreSQL and PostGIS for spatial database management. Developed QGIS extensions using Python. Managed code versions with Git.",
		},
		{
			title: "Swiss Startup Monopole",
			role: "Web3 Developer",
			start: "June 2023",
			end: "Sept 2023",
			logo: "/ronanren.github.io/logos/monopole.png",
			description: "Implemented Solidity smart contracts for EVM-compatible blockchains. Developed smart contracts in Rust for the MultiversX blockchain. Added tests for smart contracts in Rust for MultiversX and used Chai/ Hardhat for testing Solidity contracts. Implemented interactions with smart contracts on a dApp built with NextJS. Developed an API in NestJS to handle user- to - blockchain interactions, including cache management.",
		},
	],
} as const;