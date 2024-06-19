import { useLayoutEffect } from "react";
import SplitType from 'split-type';
import { gsap } from 'gsap';

export default function Loading(){

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{

            let timeline = gsap.timeline();
           
            const splitload = document.querySelectorAll(".load");
            splitload.forEach((char,i)=>{
                const text = new SplitType(char, {types:'chars'})
                timeline.from(text.chars,{
                    y:100,
                    lazy: false,                 
                    opacity: 0,
                    stagger: 0.1,
                    ease: "power3.inOut",
                    duration:1
                })
            });

            
            timeline.from(".background",{
                opacity:0,
                height:0,
                duration: 0.8,
                ease: "power3.inOut",
            })

            timeline.to(".load",{
                autoAlpha:0,
                duration:0,
            })

            timeline.to(".background",{
                opacity:0,
                height:0,
                duration: 1,
                ease: "power3.inOut",
            })
        });
        return() => ctx.revert();
    });
    
    return(
        <>
            <div className="relative">
                <div className="absolute background bg-theme-w h-screen w-screen z-20">heelo</div>
                <div className="mx-auto items-center justify-center flex flex-col h-screen w-screen">
                    
                    <h1 className="absolute load overflow-hidden z-10" >LOADING... </h1>
                </div>
            </div>
        </>
    )
}