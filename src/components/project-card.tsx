"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Markdown from "react-markdown";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
	title: string;
	description: string;
	techs: readonly string[];
	dates: string;
	image: string;
	video: string;
	href: string;
	links: readonly { type: string, href: string, icon: React.ReactNode }[];
}

export const ProjectCard = ({ title, description, techs, dates, image, video, href, links }: ProjectCardProps) => {
	return (
		<Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
    >
      <Link
        href={href || "#"}
        className="block cursor-pointer"
        target="_blank"
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
	  <CardHeader className="px-2 py-0">
		<CardTitle className="mt-1 text-base">{title}</CardTitle>
		<time className="font-sans text-xs">{dates}</time>
		<Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
		{description}
		</Markdown>
	  </CardHeader>
	  <CardContent className="mt-auto flex flex-col px-2 pb-2.5">
        {techs && techs.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {techs?.map((tech) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
	  <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, index) => (
              <Link href={link?.href} key={index} target="_blank">
                <Badge key={index} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
	  </Card>
	);
}