import { LensComponent } from "@/components/Lens";
import { FloatingDockComponent } from "@/components/Menu";
import { TimelineComponent } from "@/components/Timeline";

export default function Home() {
	return (
		<div className="bg-neutral-900">
			<TimelineComponent />
			<LensComponent />
			<FloatingDockComponent />
		</div>
	);
}
