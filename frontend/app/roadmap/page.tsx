import {Milestones} from '../components';

export default function RoadmapPage () {

    return (
        <div id="roadmap-root"
            className="w-screen h-screen flex-col"
        >
<div id="header"
        className='flex h-[30%] w-screen justify-center'>
          <div className='w-screen h-full justify-center relative flex badge-container md:w-[40%] md:h-[50%]'>
            <h1 className="select-none text-7xl text-slate-900 font-black absolute top-20 left-10 cursor-default drop-shadow-md md:relative md:left-40 first-name h-0 z-10">ROAD</h1>
            <div className={'m-2 w-[65%] h-[50%] rounded-md mt-[4.5rem] shadow-md md:w-[30%] md:h-[99%] bg-cyan-200 -z-5 opacity-[85%]'}/>
            <h1 className="select-none absolute text-slate-900 font-black text-7xl right-5 top-[115px] cursor-default drop-shadow-md md:relative md:right-[140px] h-0 -z-10">MAP</h1>
          </div>
      </div>
            <div
                className="w-full items-center"
            >
            <Milestones
                containerStyle='py-10 flex justify-center cursor-default select-none'
            />
            </div>
        </div>
    )
}
