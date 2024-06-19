import { projects } from '../data/data.js';

export default function ProjectModal({isActive, proj, showModal}){
   
   if(isActive){
        document.body.style.overflow = "hidden";
        const project = projects.find((p) => p.id === proj);

        document.addEventListener('keydown', e => {
            if (e.key === "Escape") {
                showModal();
            }
          })

        if(proj === "proj1"){
            return(
                <>

                <div className="z-50 fixed flex mx-auto max-h-screen min-h-screen min-w-full max-w-screen items-center backdrop-blur bg-gray-800/30 justify-center">
                    <div className="overflow-y-auto p-12 w-8/12 max-h-[80vh] rounded-lg drop-shadow-lg bg-theme-b2/85 " >
                        <div onClick={showModal} className='modal fixed md:top-10 md:right-12 top-8 right-6 hover:cursor-pointer'> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-center mt-5 mb-8 font-semibold">{project.title}</h2>
                            <a className=' mb-2 flex items-center text-gray-300 hover:text-theme-g1-900' href="">
                                Repository
                                <svg class="h-5 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="17" y1="7" x2="7" y2="17" />  <polyline points="8 7 17 7 17 16" /></svg>
                            </a>
                            
                            <div >
                                <span className="font-semibold">Tech stack : </span></div>
                            <div>
                                <p>About </p>
                                <span className='text-gray-300'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ante a augue pulvinar bibendum. Nulla facilisi. Sed enim felis, sagittis vel sagittis tincidunt, mollis sit amet mi. Fusce sed dictum nulla. Donec diam est, elementum luctus elementum eget, ullamcorper id ipsum. Curabitur tortor libero, fringilla vel ante posuere, maximus finibus ex. Maecenas sem tellus, semper non ligula at, efficitur feugiat nibh.
                                </span>
                            </div>

                            
                            <p>Final Words</p>
                                    <span className='text-gray-300'>Pellentesque vestibulum eu metus a lacinia. Praesent pretium tristique vulputate. Pellentesque tincidunt ipsum dignissim, tempus sapien sed, congue ligula. Vivamus imperdiet vel erat id tincidunt. Cras pretium lacus et tempus rhoncus. In justo quam, commodo pellentesque metus at, semper maximus dolor. Ut quam lorem, aliquet vel congue quis, dictum at leo. Mauris accumsan diam eu elit pulvinar congue.  </span>

                            <div className='flex flex-row justify-center font-semibold mt-8 text-sm '>
                                <button className="border rounded-full py-2 px-3 hover:text-theme-g1-900 hover:border-theme-g1-900" onClick={showModal}> Back to Projects</button>
                            </div>
                                    
                    </div>
                    
                </div>
                
                </>
            )
        }else if(proj === "proj2"){
            
            return(
                <>
                <div className="z-50 fixed flex mx-auto max-h-screen min-h-screen min-w-full max-w-screen items-center backdrop-blur bg-gray-800/30 justify-center">
                    <div className="overflow-y-auto p-12 w-8/12 max-h-[80vh] rounded-lg drop-shadow-lg bg-theme-b2/85 " >
                        <div onClick={showModal} className='modal fixed md:top-10 md:right-12 top-8 right-6 hover:cursor-pointer'> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-center mt-5 mb-8 font-semibold">{project.title}</h2>
                            <a className=' mb-2 flex items-center text-gray-300 hover:text-theme-g1-900' href="">
                                Repository
                                <svg class="h-5 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="17" y1="7" x2="7" y2="17" />  <polyline points="8 7 17 7 17 16" /></svg>
                            </a>
                            
                            <div>
                                <span className="font-semibold">Tech stack : </span></div>
                            <div>
                                <p>About </p>
                                <span className='text-gray-300'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ante a augue pulvinar bibendum. Nulla facilisi. Sed enim felis, sagittis vel sagittis tincidunt, mollis sit amet mi. Fusce sed dictum nulla. Donec diam est, elementum luctus elementum eget, ullamcorper id ipsum. Curabitur tortor libero, fringilla vel ante posuere, maximus finibus ex. Maecenas sem tellus, semper non ligula at, efficitur feugiat nibh.
                                </span>
                            </div>

                            
                            <p>Final Words</p>
                                    <span className='text-gray-300'>Pellentesque vestibulum eu metus a lacinia. Praesent pretium tristique vulputate. Pellentesque tincidunt ipsum dignissim, tempus sapien sed, congue ligula. Vivamus imperdiet vel erat id tincidunt. Cras pretium lacus et tempus rhoncus. In justo quam, commodo pellentesque metus at, semper maximus dolor. Ut quam lorem, aliquet vel congue quis, dictum at leo. Mauris accumsan diam eu elit pulvinar congue.  </span>

                            <div className='flex flex-row justify-center font-semibold mt-8 text-sm '>
                                <button className="border rounded-full py-2 px-3 hover:text-theme-g1-900 hover:border-theme-g1-900" onClick={showModal}> Back to Projects</button>
                            </div>
                                    
                    </div>
                    
                </div>
                </>
            )
        }else if(proj === "proj3"){
            
            return(
                <>
                <div className="z-50 fixed flex mx-auto max-h-screen min-h-screen min-w-full max-w-screen items-center backdrop-blur bg-gray-800/30 justify-center">
                    <div className="overflow-y-auto p-12 w-8/12 max-h-[80vh] rounded-lg drop-shadow-lg bg-theme-b2/85 " >
                        <div onClick={showModal} className='modal fixed md:top-10 md:right-12 top-8 right-6 hover:cursor-pointer'> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-center mt-5 mb-8 font-semibold">{project.title}</h2>
                            <a className=' mb-2 flex items-center text-gray-300 hover:text-theme-g1-900' href="">
                                Repository
                                <svg class="h-5 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="17" y1="7" x2="7" y2="17" />  <polyline points="8 7 17 7 17 16" /></svg>
                            </a>
                            
                            <div>
                                <span className="font-semibold">Tech stack : </span></div>
                            <div>
                                <p>About </p>
                                <span className='text-gray-300'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ante a augue pulvinar bibendum. Nulla facilisi. Sed enim felis, sagittis vel sagittis tincidunt, mollis sit amet mi. Fusce sed dictum nulla. Donec diam est, elementum luctus elementum eget, ullamcorper id ipsum. Curabitur tortor libero, fringilla vel ante posuere, maximus finibus ex. Maecenas sem tellus, semper non ligula at, efficitur feugiat nibh.
                                </span>
                            </div>

                            
                            <p>Final Words</p>
                                    <span className='text-gray-300'>Pellentesque vestibulum eu metus a lacinia. Praesent pretium tristique vulputate. Pellentesque tincidunt ipsum dignissim, tempus sapien sed, congue ligula. Vivamus imperdiet vel erat id tincidunt. Cras pretium lacus et tempus rhoncus. In justo quam, commodo pellentesque metus at, semper maximus dolor. Ut quam lorem, aliquet vel congue quis, dictum at leo. Mauris accumsan diam eu elit pulvinar congue.  </span>

                            <div className='flex flex-row justify-center font-semibold mt-8 text-sm '>
                                <button className="border rounded-full py-2 px-3 hover:text-theme-g1-900 hover:border-theme-g1-900" onClick={showModal}> Back to Projects</button>
                            </div>
                                    
                    </div>
                    
                </div>
                </>
            )
    }
    
}else{
        document.body.style.overflow = "auto";

        return null
   }

}