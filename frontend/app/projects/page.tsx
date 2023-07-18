import Link from "next/link";

export default function ProjectsPage() {
  return(
    <div className={'h-screen w-screen flex-col'}>
      <div className='flex h-[30%] w-screen justify-center'>
          <div className='w-screen h-full justify-center relative flex badge-container md:w-[40%] md:h-[50%]'>
            <h1 className="select-none text-7xl text-slate-900 font-black absolute top-20 left-10 cursor-default drop-shadow-md md:relative md:left-40 first-name h-0">PROJ-</h1>
            <div className={'m-2 w-[65%] h-[50%] rounded-md mt-[4.5rem] shadow-md md:w-[30%] md:h-[99%] bg-lime-400'}/>
            <h1 className="select-none absolute text-slate-900 font-black text-7xl right-5 top-[115px] cursor-default drop-shadow-md hover:filter-none md:relative md:right-[140px] h-0 mix-blend-overlay">ECTS</h1>
          </div>
      </div>
      <div className="flex justify-center">
      {/* <a href="/projects/mini-rover"> */}
        <p className="text-4xl font-bold">
          <Link href="/projects/mini-rover">
          Mini Rover &gt;
          </Link>
        </p>
      {/* </a> */}
      </div>
    </div>
  )
}