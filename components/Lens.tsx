"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lens } from "./ui/lens";

export function LensComponent() {
	const [hovering, setHovering] = useState(false);

	return (
		<div>
			<div className="relative rounded-3xl overflow-hidden w-[80%] mx-auto p-2 my-8 mb-0">
				<div className="relative flex flex-row-reverse">
					<div className="flex-[4]">
						<Lens hovering={hovering} setHovering={setHovering}>
							<Image
								src="/one.jpg"
								alt="image"
								width={500}
								height={500}
								className="rounded-2xl w-full h-[50vh] pl-12 "
							/>
						</Lens>
					</div>
					<motion.div
						animate={{
							filter: hovering ? "blur(2px)" : "blur(0px)",
						}}
						className="py-4 relative z-20 flex flex-col items-start justify-center flex-[3]"
					>
						<h2 className="text-white text-[3rem] creepster text-left font-bold">
							Halloween over time
						</h2>
						<p className="text-neutral-200 text-left mt-4">
							Halloween started over 2,000 years ago with the Celts&apos;
							festival of Samhain and evolved as Christian traditions blended
							in. In America, it became the fun, spooky holiday we know today,
							full of costumes, treats, and community celebrations.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
