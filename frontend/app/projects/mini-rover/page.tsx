import { Hero } from "@/app/lib/components";
import MastodonPostFeed from "mastodon-post-feed/lib/mastodon-post-feed";

export default function MiniRover() {
  return (
    <div className="flex-col w-screen h-screen">
      <Hero topLayerText="mini" bottomLayerText="rover" color="bg-teal-400" />
      <div className="md:flex mx-3 md:ml-60">
        <div className="flex-col">
          <div>
            <p className="text-2xl">Latest News</p>
          </div>
          <MastodonPostFeed
            postId="110684790778942335"
            mastodonInstanceUrl="mastodon.tejat.net"
          />
        </div>
        <div className="mt-4 md:ml-10 p-2 text-3xl">
          <p>
            A mini rover project, the plan is to make the rover fully
            autonomous. This project combines my knowledge in multiple areas.
          </p>
          <br />
          <p>Key Features:</p>
          <div>
            <ul>
              <li>Raspberry Pi Pico embedded microcontroller</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}