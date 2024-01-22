import Link from "next/link";
import "./home.css";
import { Button } from "react-aria-components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeUi />
    </>
  );
}

function HomeUi() {
  return (
    <div className="flex-col h-screen w-screen">
      <div className="flex h-[30%] w-screen justify-center">
        <div className="w-screen h-full justify-center relative flex badge-container md:w-[40%] md:h-[50%]">
          <h1 className="select-none text-7xl text-slate-900 font-black absolute top-20 left-10 cursor-default drop-shadow-md md:relative md:left-40 first-name h-0 z-10 ">
            DAVID
          </h1>

          <div
            className={
              "bg-red-500 m-2 w-[65%] h-[50%] rounded-md mt-[4.5rem] shadow-md md:w-[30%] md:h-[99%] -z-5 opacity-[85%]"
            }
          />

          <h1 className="select-none absolute text-slate-900 font-black text-7xl right-5 top-[115px] cursor-default drop-shadow-md md:relative md:right-40 h-0 transform-gpu -z-10">
            GARCIA
          </h1>
        </div>
      </div>
      <div className="flex-col h-full">
        <div className="flex justify-center">
          <p className="text-xl font-medium cursor-default select-none">
            Software engineer
          </p>
        </div>
        <div className="flex-row md:flex mx-10 mt-10 md:justify-center gap-10">
          <Link href={"/projects"} as={"/projects"}>
            <div className="h-[150px] w-[150px] rounded-lg hover:shadow-lg relative flex justify-center items-end border border-gray-300 bg-white">
              <p className="align-baseline text-lg font-semibold opacity-75 pb-3 select-none">
                Projects
              </p>
            </div>
          </Link>
          <Link href={"/roadmap"} as={"/roadmap"}>
            <div className="h-[150px] w-[150px] rounded-lg hover:shadow-lg relative flex justify-center items-end border border-gray-300 bg-white">
              <p className="align-baseline text-lg font-semibold opacity-75 pb-3 select-none">
                Roadmap
              </p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center pt-10">
          <Link target="_blank" href={"/resume.pdf"} as={"/resume.pdf"}>
            <Button className="bg-white border border-gray-300 py-1 px-3 rounded-xl hover:shadow-lg">
              <div className="flex gap-2 items-center">
                <div className="font-semibold">
                  Resume
                </div>
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert h-5 w-5"
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
