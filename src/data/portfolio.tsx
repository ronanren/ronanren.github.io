import { Github } from "@/app/icons/github";
import { Globe } from "@/app/icons/globe";

export const DATA = {
	name: "Ronan Renoux",
	initials: "RR",
	email: "renouxpro@gmail.com",
	linkedin: "https://www.linkedin.com/in/ronanrenoux/",
	x: "https://x.com/ronanren",
	github: "https://github.com/ronanren",
	avatarUrl: "profile.png",
	url: "https://ronanren.github.io",
	description: "Engineer graduate, now a freelance dev. Building cool things, solving problems, and helping people over the world!",
	summary:
		"In September 2024, I graduated as an engineer from [ENSSAT](https://www.enssat.fr) in France and started working as a **freelance developer**. During a 4-year work-study at [Rennes Métropole](https://metropole.rennes.fr), I gained experience in **GIS** and **web development**. I worked as a **Web3 developer** at a Swiss startup, deepening my passion for **decentralized technologies**. Now, I work remotely, specializing in **web development**, **automation**, and **Web3**, collaborating with clients worldwide 🌍.",
	photos: [
		"photos/image1.webp",
		"photos/image2.webp",
		"photos/image3.webp",
		"photos/image4.webp",
		"photos/image5.webp",
		"photos/image6.webp",
		"photos/image7.webp",
	],
	works: [
		{
			title: "Freelance Developer",
			role: "Web Developer",
			start: "Sept 2024",
			end: "Present",
			logo: "profile.png",
			description: "Freelance developer creating custom solutions for clients worldwide, specializing in web development, automation, and Web3 technologies.",
		},
		{
			title: "Rennes Métropole",
			role: "GIS/Web Developer",
			start: "Sept 2020",
			end: "Sept 2024",
			logo: "logos/rennes-metropole.png",
			description: "Work-study in the GIS department, developing web applications for Rennes Métropole. Managed projects using Agile methodologies. Analyzed requirements, designed solutions, and documented specifications. Developed web applications using JavaScript, HTML5/ CSS3, PHP, Symfony, and Twig. Implemented CI/CD pipelines with GitLab CI, Docker, and Jenkins. Worked with PostgreSQL and PostGIS for spatial database management. Developed QGIS extensions using Python.",
		},
		{
			title: "Monopole",
			role: "Web3 Developer",
			start: "June 2023",
			end: "Sept 2023",
			logo: "logos/monopole.png",
			description: "Implemented Solidity smart contracts for EVM-compatible blockchains. Developed smart contracts in Rust for the MultiversX blockchain. Added tests for smart contracts in Rust for MultiversX and used Chai/Hardhat for testing Solidity contracts. Implemented interactions with smart contracts on a dApp built with NextJS. Developed an API in NestJS to handle user-to-blockchain interactions, including cache management.",
		},
	],
	education: [
		{
			title: "ENSSAT",
			role: "Engineer's Degree in Computer Science",
			start: "2021",
			end: "2024",
			logo: "logos/enssat.png",
			url: "https://www.enssat.fr",
		},
		{
			title: "IUT Lannion - University Institute of Technology",
			role: "University Diploma in Computer Science",
			start: "2019",
			end: "2021",
			logo: "logos/iut-lannion.jpeg",
			url: "https://iut-lannion.univ-rennes.fr/",
		},
		{
			title: "Jean-Paul II High School - Saint-Grégoire",
			role: "General Scientific Baccalaureate, Life and Earth Sciences",
			start: "2016",
			end: "2019",
			logo: "logos/lycee-jean-paul-ii.png",
			url: "https://www.lycee-jeanpaul2.fr/",
		}
	],
	projects: [
		{
			title: "FreeWork Dashboard",
			description: "A website that stores freelance job listings from FreeWork, enabling users to analyze trends over time and contact companies easily. It helps freelancers track opportunities and plan their careers effectively.",
			techs: ["Next.js", "TailwindCSS", "PostgreSQL", "Python", "GitHub Actions"],
			dates: "July 2024 - Present",
			image: "",
			video: "videos/freework-dashboard.mp4",
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
			title: "Social Stack",
			description: "The ultimate tool for showcasing social links, projects, and more in one seamless platform. It's a SaaS platform that's 100% free for now.",
			techs: ["Next.js", "Supabase", "NextUI", "TailwindCSS"],
			dates: "May 2024 - Present",
			image: "",
			video: "videos/social-stack.mp4",
			href: "https://socialstack.me/",
			links: [
				{
					type: "Website",
					href: "https://socialstack.me/",
					icon: <Globe width={14} height={14} />
				}
			]
		},
		{
			title: "StackOverflow Answer",
			description: "A Chrome Extension that integrates StackOverflow answers into Google search results, helping users find relevant solutions without leaving the page. With over 100 active users, it remains a valuable tool for developers.",
			techs: ["JavaScript", "CSS", "HTML"],
			dates: "December 2022 - Present",
			image: "",
			video: "videos/stackoverflow-answer.mp4",
			href: "https://chrome.google.com/webstore/detail/stackoverflow-answer/bmlkdgmiaemiaopodggkhfblhmefimoi",
			links: [
				{
					type: "Chrome Web Store",
					href: "https://chrome.google.com/webstore/detail/stackoverflow-answer/bmlkdgmiaemiaopodggkhfblhmefimoi",
					icon: <Globe width={14} height={14} />
				},
				{
					type: "Source",
					href: "https://github.com/ronanren/StackOverflowAnswer",
					icon: <Github width={14} height={14} />
				}
			]
		},
		{
			title: "Crypto Ticker LED",
			description: "A system to display real-time cryptocurrency prices on a matrix LED, paired with a web interface for seamless control. The software, developed by me, while the hardware is sold by a partner.",
			techs: ["Python", "React", "Chakra UI"],
			dates: "September 2024 - Present",
			image: "",
			video: "videos/crypto-ticker-led.mp4",
			href: "https://www.etsy.com/listing/1660298917/handcrafted-cryptoak-ticker-112-led",
			links: [
				{
					type: "Etsy",
					href: "https://www.etsy.com/listing/1660298917/handcrafted-cryptoak-ticker-112-led",
					icon: <Globe width={14} height={14} />
				},
				{
					type: "Source",
					href: "https://github.com/ronanren/CryptoTickerLed",
					icon: <Github width={14} height={14} />
				}
			]
		},
	],
} as const;