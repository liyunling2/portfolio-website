
import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function HomePage(){
    document.body.style.overflowY = "auto";
    let date = new Date();
    let [SGT, setSGT] = useState(date.toLocaleString( "en",{timeZone:'Asia/Singapore',timeStyle: "short"}))

    function updateTime(){
        setSGT(date.toLocaleString( "en",{timeZone:'Asia/Singapore',timeStyle: "short"}))
    }
    setInterval(updateTime, 2000); 

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            const tl = gsap.timeline();
            tl.from(".topInfo, .helloSection",{
                opacity: 0 ,
                duration: 1,
                ease: "power2.inOut",
                y: -30,
                stagger:0.1
            })
            

        });
        return() => ctx.revert();
    }, []);


    return(
        <>
            <section className="topInfo fixed w-screen flex md:flex-row flex-col md:justify-between justify-center items-center lg:pt-14 lg:px-14 md:pt-10 md:px-10 py-11 md:space-y-0 space-y-4">
                <div className="text-gray-600 text-sm">
                    Based in Singapore &nbsp;&nbsp;|&nbsp;&nbsp; Local time {SGT}
                </div>
                <div className="border border-gray-600 text-gray-600 text-sm rounded-full md:px-5 md:py-2 px-4 py-1.5 flex items-center ">
                    <span className="w-2.5 h-2.5 border-2 border-theme-g1-700 bg-theme-g1-700 flex rounded-full mr-1.5">
                    </span>
                    Available to work
                </div>
            </section>


            <section className="section helloSection">
                
               <div className="z-10">
                <h1 className='pb-10 '>Hello there!</h1>    
                    
                    <span className=' text-xl text-gray-400 mb-20 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ante a augue pulvinar bibendum.</span>
                    <div className='flex w-screen justify-center mt-10'>
                        <div className='md:text-2xl text-lg border rounded-full md:py-4 px-8 md:space-x-8 py-3 space-x-4'>
                            <Link to="/aboutme"  className="col-span-3 lg:col-span-1 hover:text-theme-g1-900" > About</Link> 
                            <span>|</span>
                
                            <Link className="col-span-3 lg:col-span-1 hover:text-theme-g1-900" to="/projects"> Projects</Link>
                            <span>|</span>
                        
                            <Link className="col-span-3 lg:col-span-1 hover:text-theme-g1-900" to="/contact"> Contact</Link>
                        </div>
                    </div>
               </div>

            </section>
        
            
        </>
    )
}