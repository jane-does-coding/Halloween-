"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineComponent() {
	const data = [
		{
			title: "2,000 years ago",
			content: (
				<div>
					<h2 className="text-[3rem] mb-4 creepster">Ancient Celtic Origins</h2>
					<p className="text-neutral-800  dark:text-neutral-300 text-xs md:text-[1.1rem] font-normal mb-8 leading-[1.75rem]">
						The festival of Samhain, celebrated by the Celts around 2,000 years
						ago, marked the end of the harvest season and the start of winter.
					</p>
					<div className="flex flex-col gap-4">
						<div className="flex gap-4">
							<Image
								src="/two.jpg"
								alt="startup template"
								width={500}
								height={500}
								className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
							<Image
								src="/three.jpg"
								alt="startup template"
								width={500}
								height={500}
								className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
						</div>
						<div className="flex gap-6">
							<Image
								src="/one.jpg"
								alt="startup template"
								width={500}
								height={500}
								className="flex-1 rounded-lg object-cover h-20 md:h-44 lg:h-[20rem] w-[20rem] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
							<div className="flex flex-col flex-4 gap-1 items-start justify-center">
								<h2 className=" mb-4 text-[2rem] creepster tracking-[1px]">
									Ancient Celtic Origins of Halloween
								</h2>
								<div className="flex flex-col gap-3">
									<p className="pb-4 text-[0.9rem] leading-[1.25rem] border-b-[1px] border-neutral-700 text-neutral-200">
										The Celts believed that on the night of October 31, the line
										between the living and the dead blurred.
									</p>
									<p className="pb-4 text-[0.9rem] leading-[1.25rem] border-b-[1px] border-neutral-700 text-neutral-200">
										People would pght large bonfires and wear costumes, often
										made of animal skins, to ward off wandering spirits.
									</p>
									<p className="pb-2 text-[0.9rem] leading-[1.25rem] border-b-2 border-neutral-800/0 text-neutral-200">
										This practice set the foundation for Halloween traditions
										pke dressing up and honoring the supernatural.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "7th-9th Century",
			content: (
				<div>
					<h2 className="text-[3rem] mb-2 creepster">
						Christian Influence on Halloween
					</h2>
					<p className="text-neutral-800  dark:text-neutral-300 text-xs md:text-[1.1rem] font-normal mb-8 leading-[1.75rem]">
						Around the 7th to 9th centuries, the Christian Church established
						November 1 as All Saints&apos; Day to honor saints. The night
						before, known as All Hallows&apos; Eve, eventually blended with
						local customs and became Halloween.
					</p>
					<div className="flex flex-col gap-4">
						<div className="flex gap-0">
							<Image
								src="/five.png"
								alt="startup template"
								width={500}
								height={500}
								className="flex-1 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-[35%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
							<div className="flex w-[30%] px-6 flex-1 flex-col flex-4 gap-1 items-start justify-center">
								<h2 className=" mb-2 text-[1.75rem] creepster tracking-[1px]">
									Ancient Celtic Origins of Halloween
								</h2>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
							</div>

							<Image
								src="/six.webp"
								alt="startup template"
								width={500}
								height={500}
								className="flex-1 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-[35%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
						</div>

						<Image
							src="/four.jpg"
							alt="startup template"
							width={500}
							height={500}
							className=" rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>

						{/* <div className="flex flex-row-reverse gap-6">
							<Image
								src="/one.jpg"
								alt="startup template"
								width={500}
								height={500}
								className="flex-1 rounded-lg object-cover h-20 md:h-44 lg:h-[20rem] w-[20rem] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
							<div className="flex flex-col flex-4 gap-1 items-start justify-center">
								<h2 className=" mb-4 text-[2rem] creepster tracking-[1px]">
									Ancient Celtic Origins of Halloween
								</h2>
								<div className="flex flex-col gap-3">
									<p className="pb-4 text-[0.9rem] leading-[1.25rem] border-b-[1px] border-neutral-700 text-neutral-200">
										The Celts believed that on the night of October 31, the line
										between the living and the dead blurred.
									</p>
									<p className="pb-4 text-[0.9rem] leading-[1.25rem] border-b-[1px] border-neutral-700 text-neutral-200">
										People would pght large bonfires and wear costumes, often
										made of animal skins, to ward off wandering spirits.
									</p>
									<p className="pb-2 text-[0.9rem] leading-[1.25rem] border-b-2 border-neutral-800/0 text-neutral-200">
										This practice set the foundation for Halloween traditions
										pke dressing up and honoring the supernatural.
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			),
		},
		{
			title: "20th Century",
			content: (
				<div>
					<h2 className="text-[3rem] mb-2 creepster">
						Rise of Halloween Traditions in America
					</h2>
					<p className="text-neutral-800  dark:text-neutral-300 text-xs md:text-[1.1rem] font-normal mb-8 leading-[1.75rem]">
						By the early 1900s, Halloween evolved into a community-centered
						holiday with parades, games, and festive gatherings.
					</p>
					<div className="flex gap-4">
						<div className="w-[30%] flex flex-col items-start justify-center">
							<h1 className="creepster text-[2.75rem]">
								Trick-or-Treating & Costumes
							</h1>
							<p className="text-neutral-800  dark:text-neutral-300 text-xs md:text-[1.1rem] font-normal mb-8 leading-[1.75rem]">
								Trick-or-treating became widespread by the 1950s, with children
								dressing up in costumes to collect candy from neighbors.
							</p>
						</div>
						<Image
							src="/nine.jpg"
							alt="startup template"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-[30rem] w-[35%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<div className="flex flex-col gap-4 w-[25%]">
							<Image
								src="/seven.png"
								alt="startup template"
								width={500}
								height={500}
								className="rounded-lg object-cover h-20 md:h-44 lg:h-[14.5rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
							<Image
								src="/eight.webp"
								alt="startup template"
								width={500}
								height={500}
								className="rounded-lg object-cover h-20 md:h-44 lg:h-[14.5rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
							/>
						</div>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="w-full">
			<Timeline data={data} />
		</div>
	);
}
