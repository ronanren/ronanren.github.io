"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

interface ResumeCardProps {
	title: string;
	role: string;
	start: string;
	end: string;
	logo: string;
	description?: string;
	url?: string;
}

export const ResumeCard = ({ title, role, start, end, logo, description, url }: ResumeCardProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}

	return (
		<Link className="flex cursor-pointer group" onClick={handleClick} href={url || ""} scroll={false} target={url && "_blank"}>
			<Avatar className="size-12 border">
				<AvatarImage src={logo} alt={title} />
				<AvatarFallback>{title.slice(0, 1)}</AvatarFallback>
			</Avatar>
			<div className="flex flex-col ml-4 w-full">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<div className="flex items-center">
							<div className="font-semibold text-xs sm:text-sm">{title}</div>
							<ChevronRight className={cn("size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100", { "rotate-90": isOpen && !url })} />
						</div>
						<div className="text-xs">{role}</div>
					</div>
					<div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{start} - {end}</div>
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="mt-2"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.25 }}
							layout
						>
							<div className="text-xs sm:text-sm text-justify">{description}</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</Link>
	);
}