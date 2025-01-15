import { Hero, Milestones} from "@/app/lib/components";

export default function RoadmapPage() {
  return (
    <div id="roadmap-root" className="flex-col w-full h-screen">
      <Hero
        topLayerText="road"
        bottomLayerText="map"
        color="bg-cyan-200"
      />
      <div className="items-center w-full">
        <Milestones containerStyle="py-10 flex justify-center cursor-default select-none" />
      </div>
    </div>
  );
}
