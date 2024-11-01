import { FocusCardsDemo } from "@/components/FocusCards";
import { LensComponent } from "@/components/Lens";
import { FloatingDockComponent } from "@/components/Menu";
import Notes from "@/components/Notes";
import { TimelineComponent } from "@/components/Timeline";

export default function Home() {
	return (
		<div className="bg-neutral-900">
			<div className="" id="history">
				<TimelineComponent /> {/* History Section */}
			</div>
			<div className="" id="home">
				<LensComponent /> {/* Home Section */}
			</div>
			<div className="mt-12" id="pumpkins">
				{" "}
				{/* Pumpkins Section */}
				<h1 className="mt-16 mb-10 text-[4rem] text-neutral-200 creepster mx-auto text-center">
					Halloween Traditions
				</h1>
				<FocusCardsDemo />
			</div>
			<div className="" id="candy">
				<Notes /> {/* Candy Section */}
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<FloatingDockComponent />
		</div>
	);
}
