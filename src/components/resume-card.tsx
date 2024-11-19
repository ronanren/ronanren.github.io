import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ResumeCardProps {
	title: string;
	role: string;
	start: string;
	end: string;
	logo: string;
	description: string;
}

export const ResumeCard = ({ title, role, start, end, logo, description }: ResumeCardProps) => {

	return (
		<div className="flex">
			<Avatar className="size-12 border">
				<AvatarImage src={logo} alt={title} />
				<AvatarFallback>{title}</AvatarFallback>
			</Avatar>
			<div className="flex flex-col ml-4">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<div className="font-semibold text-sm">{title}</div>
						<div className="text-xs">{role}</div>
					</div>
					<div className="text-sm text-muted-foreground">{start} - {end}</div>
				</div>
				<div className="mt-2">
					<div className="text-sm">{description}</div>
				</div>
			</div>
		</div>
	);
}