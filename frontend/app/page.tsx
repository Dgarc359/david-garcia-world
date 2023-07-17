import './home.css';

export default function Home() {
  return(
    <div className='flex-col h-screen w-screen'>
      <div className='flex h-[30%] w-screen justify-center'>
          <div className='w-screen h-full justify-center relative flex badge-container md:w-[40%] md:h-[50%]'>
            <h1 className="select-none text-7xl text-slate-900 font-black absolute top-20 left-10 cursor-default drop-shadow-md md:relative md:left-40 first-name h-0">DAVID</h1>
            <div className={'bg-red-500 m-2 w-[65%] h-[50%] rounded-md mt-[4.5rem] shadow-md md:w-[30%] md:h-[99%]'}/>
            
            <h1 className="select-none absolute text-slate-900 font-black text-7xl right-5 top-[115px] cursor-default mix-blend-overlay drop-shadow-md hover:filter-none md:relative md:right-40 h-0">GARCIA</h1>
          </div>
      </div>
      <div className="flex-col">
       <div className="flex justify-center">
       <p className="text-xl font-medium cursor-default select-none">Software engineer</p>
       </div>
       <div className="flex h-screen mx-10 mt-10 justify-center gap-10">
        <a className="h-[150px]" href="/projects">
        <div className="bg-violet-500 h-[150px] w-[150px] rounded-lg shadow-lg hover:bg-violet-800 relative flex justify-center items-end">
          <p className="align-baseline text-lg text-white font-semibold opacity-75 pb-3 select-none">Projects</p>
        </div>
        </a>
        <a className="h-[150px]" href="">
        <div className=" bg-green-300 h-[150px] w-[150px] rounded-lg shadow-lg hover:bg-green-800 relative flex justify-center items-end">
        <p className="align-baseline text-lg text-white font-semibold opacity-75 pb-3 select-none">Resume</p>
        </div>
        </a>

        

       </div>
      </div>
    </div>
  );
}

