import MastodonPostFeed from "mastodon-post-feed/lib/mastodon-post-feed";

export default function MiniRover() {
  return(
    <div className="w-screen h-screen flex-col">
      <div className='flex h-[30%] w-screen justify-center'>
          <div className='w-screen h-full justify-center relative flex badge-container md:w-[40%] md:h-[50%]'>
            <h1 className="select-none text-7xl text-slate-900 font-black absolute top-20 left-10 cursor-default drop-shadow-md md:relative md:left-40 first-name h-0">MINI</h1>
            <div className={'m-2 w-[65%] h-[50%] rounded-md mt-[4.5rem] shadow-md md:w-[30%] md:h-[99%] bg-teal-400'}/>
            
            <h1 className="select-none absolute text-slate-900 font-black text-7xl right-5 top-[115px] cursor-default drop-shadow-md hover:filter-none md:relative md:right-[140px] h-0 mix-blend-overlay">ROVER</h1>
          </div>
      </div>
      <div className="md:flex md:ml-60 mx-3 ">
        <div className="flex-col">
          <div>
            <p className="text-2xl">Latest News</p>
          </div>
          <MastodonPostFeed postId='110684790778942335' mastodonInstanceUrl='mastodon.tejat.net' />
        </div>
        <div className="mt-4 md:ml-10 text-3xl p-2">
          <p>
          A mini rover project, the plan is to make the rover fully autonomous
          </p>
        </div>
      </div>
    </div>
  )
}