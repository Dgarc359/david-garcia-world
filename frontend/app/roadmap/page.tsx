import { Milestones } from "../components";
import { Hero } from "../components/hero";

export default function RoadmapPage() {
  return (
    <div id="roadmap-root" className="w-screen h-screen flex-col">
      <Hero
        topLayerText="road"
        bottomLayerText="map"
        color="bg-cyan-200"
      />
      <div className="w-full items-center">
        <Milestones containerStyle="py-10 flex justify-center cursor-default select-none" />
        H
      </div>
    </div>
  );
}
