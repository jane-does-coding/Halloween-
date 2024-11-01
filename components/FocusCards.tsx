import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
	const cards = [
		{
			title: "Watch scary movies",
			src: "/img1.jpg",
		},
		{
			title: "Make halloween food",
			src: "/img2.jpg",
		},
		{
			title: "Trick or treating",
			src: "/img3.jpg",
		},
		{
			title: "Dressing up",
			src: "/img4.jpg",
		},
		{
			title: "Carving pumpkins",
			src: "/img5.jpg",
		},
		{
			title: "Giving candy",
			src: "/img6.jpg",
		},
	];

	return <FocusCards cards={cards} />;
}
