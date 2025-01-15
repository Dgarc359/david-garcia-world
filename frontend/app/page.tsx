import Link from "next/link";
import "./home.css";
import { Button } from "react-aria-components";
import Image from "next/image";
import { Hero } from "@/app/lib/components";

export default function Home() {
  return (
    <>
      <HomeUi />
    </>
  );
}

function HomeUi() {
  return (
    <div className="flex-col w-full h-screen">
      <Hero topLayerText="David" bottomLayerText="Garcia" color="bg-red-500"/>
      <div className="flex-col">
        <div className="flex justify-center">
          <p className="font-medium text-xl cursor-default select-none">
            Software engineer
          </p>
        </div>
        <div className="flex flex-row justify-center gap-10 mx-10 mt-10">
          <Link href={"/projects"} as={"/projects"}>
            <div className="relative flex justify-center items-end border-gray-300 bg-white hover:shadow-lg border rounded-lg w-[150px] h-[150px]">
              <p className="opacity-75 pb-3 font-semibold text-lg select-none align-baseline">
                Projects
              </p>
            </div>
          </Link>
          <Link href={"/roadmap"} as={"/roadmap"}>
            <div className="relative flex justify-center items-end border-gray-300 bg-white hover:shadow-lg border rounded-lg w-[150px] h-[150px]">
              <p className="opacity-75 pb-3 font-semibold text-lg select-none align-baseline">
                Roadmap
              </p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center pt-10">
          <Link target="_blank" href={"/resume.pdf"} as={"/resume.pdf"}>
            <Button className="border-gray-300 bg-white hover:shadow-lg px-3 py-1 border rounded-xl">
              <div className="flex items-center gap-2">
                <div className="font-semibold">
                  Resume
                </div>
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-5 h-5 dark:invert"
                  src="/download-icon.svg"
                  alt="Download Icon"
                  width={180}
                  height={37}
                  priority
                />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
