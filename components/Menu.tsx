"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import { RiGhostLine } from "react-icons/ri";
import { BiBone } from "react-icons/bi";
import { GiPumpkin } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";

export function FloatingDockComponent() {
	const links = [
		{
			title: "Home",
			icon: (
				<RiGhostLine className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},

		{
			title: "History",
			icon: (
				<BiBone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "Pumpkins",
			icon: (
				<GiPumpkin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "Candy",
			icon: (
				<LuCandy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "My GitHub",
			icon: (
				<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
	];
	return (
		<div className="flex items-center justify-center h-fit w-full fixed bottom-8 left-[50%] translate-x-[-50%] z-[99]">
			<FloatingDock mobileClassName="translate-y-20" items={links} />
		</div>
	);
}
