import { Globe } from "@/app/icons/globe";
import { link } from "fs";

export const DATA = {
	name: "Ronan Renoux",
	initials: "RR",
	email: "renouxpro@gmail.com",
	linkedin: "https://www.linkedin.com/in/ronanrenoux/",
	x: "https://x.com/ronanren",
	github: "https://github.com/ronanren",
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
			title: "Freelance Developer",
			role: "Web Developer",
			start: "Sept 2024",
			end: "Present",
			logo: "/ronanren.github.io/profile.png",
			description: "Freelance developer creating custom solutions for clients worldwide, specializing in web development, automation, and Web3 technologies.",
		},
		{
			title: "Rennes Métropole",
			role: "GIS/Web Developer",
			start: "Sept 2020",
			end: "Sept 2024",
			logo: "/ronanren.github.io/logos/rennes-metropole.png",
			description: "Work-study in the GIS department, developing web applications for Rennes Métropole. Managed projects using Agile methodologies. Analyzed requirements, designed solutions, and documented specifications. Developed web applications using JavaScript, HTML5/ CSS3, PHP, Symfony, and Twig. Implemented CI / CD pipelines with GitLab CI, Docker, and Jenkins. Worked with PostgreSQL and PostGIS for spatial database management. Developed QGIS extensions using Python. Managed code versions with Git.",
		},
		{
			title: "Monopole",
			role: "Web3 Developer",
			start: "June 2023",
			end: "Sept 2023",
			logo: "/ronanren.github.io/logos/monopole.png",
			description: "Implemented Solidity smart contracts for EVM-compatible blockchains. Developed smart contracts in Rust for the MultiversX blockchain. Added tests for smart contracts in Rust for MultiversX and used Chai/ Hardhat for testing Solidity contracts. Implemented interactions with smart contracts on a dApp built with NextJS. Developed an API in NestJS to handle user-to-blockchain interactions, including cache management.",
		},
	],
	education: [
		{
			title: "ENSSAT",
			role: "Engineer's Degree in Computer Science",
			start: "2021",
			end: "2024",
			logo: "/ronanren.github.io/logos/enssat.png",
			url: "https://www.enssat.fr",
		},
		{
			title: "IUT Lannion - University Institute of Technology",
			role: "University Diploma in Computer Science",
			start: "2019",
			end: "2021",
			logo: "/ronanren.github.io/logos/iut-lannion.jpeg",
			url: "https://iut-lannion.univ-rennes.fr/",
		},
		{
			title: "Jean-Paul II High School - Saint-Grégoire",
			role: "General Scientific Baccalaureate, Life and Earth Sciences",
			start: "2016",
			end: "2019",
			logo: "/ronanren.github.io/logos/lycee-jean-paul-ii.png",
			url: "https://www.lycee-jeanpaul2.fr/",
		}
	],
	projects: [
		{
			title: "FreeWork Dashboard",
			description: "A website that stores freelance job listings from FreeWork, allowing users to analyze trends over time and easily contact companies. It helps freelancers track job offers, identify patterns, and make informed decisions for better career planning.",
			techs: ["Next.js", "TailwindCSS", "PostgreSQL", "Python", "GitHub Actions"],
			dates: "July 2024 - Present",
			image: "",
			video: "/ronanren.github.io/videos/freework-dashboard.mp4",
			href: "https://freework-dashboard.vercel.app/",
			links: [
				{
					type: "Website",
					href: "https://freework-dashboard.vercel.app/",
					icon: <Globe width={14} height={14} />,
				}
			]
		},
		{
			title: "FreeWork Dashboard",
			description: "A website that stores freelance job listings from FreeWork, allowing users to analyze trends over time and easily contact companies. It helps freelancers track job offers, identify patterns, and make informed decisions for better career planning.",
			techs: ["Next.js", "TailwindCSS", "PostgreSQL", "Python", "GitHub Actions"],
			dates: "July 2024 - Present",
			image: "",
			video: "/ronanren.github.io/videos/freework-dashboard.mp4",
			href: "https://freework-dashboard.vercel.app/",
			links: [
				{
					type: "Website",
					href: "https://freework-dashboard.vercel.app/",
					icon: <Globe width={14} height={14} />,
				}
			]
		},
		{
			title: "FreeWork Dashboard",
			description: "A website that stores freelance job listings from FreeWork, allowing users to analyze trends over time and easily contact companies. It helps freelancers track job offers, identify patterns, and make informed decisions for better career planning.",
			techs: ["Next.js", "TailwindCSS", "PostgreSQL", "Python", "GitHub Actions"],
			dates: "July 2024 - Present",
			image: "",
			video: "/ronanren.github.io/videos/freework-dashboard.mp4",
			href: "https://freework-dashboard.vercel.app/",
			links: [
				{
					type: "Website",
					href: "https://freework-dashboard.vercel.app/",
					icon: <Globe width={14} height={14} />,
				}
			]
		},
		{
			title: "FreeWork Dashboard",
			description: "A website that stores freelance job listings from FreeWork",
			techs: ["Next.js", "TailwindCSS"],
			dates: "July 2024 - Present",
			image: "",
			video: "/ronanren.github.io/videos/freework-dashboard.mp4",
			href: "https://freework-dashboard.vercel.app/",
			links: [
				{
					type: "Website",
					href: "https://freework-dashboard.vercel.app/",
					icon: <Globe width={14} height={14} />,
				}
			]
		},
	],
} as const;