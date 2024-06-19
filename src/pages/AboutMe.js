
import { useLayoutEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import SplitType from 'split-type';
import Navbar from "../components/Navbar";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe(){
    window.scrollTo({top:0,behavior:'smooth'});

    let highlightSection = useRef(null);
    let aboutPara = useRef(null);
    let aboutImg = useRef(null);


    useLayoutEffect(() => {
        const currentYear = new Date().getFullYear();
        let ctx = gsap.context(() => {

            const intro = gsap.timeline();

            intro.from(highlightSection,{
                opacity:0,
                ease:"power3.inOut",
                duration:0.8
            })

            const splitabout = document.querySelectorAll(".aboutme");
            splitabout.forEach((char,i)=>{
                const text = new SplitType(char, {types:'words'})

                intro.from(text.words,{
                    y:100,
                    lazy: false,                 
                    opacity: 0,
                    stagger: 0.3,
                    duration:0.6,
                })
            })

            intro.from([aboutPara,aboutImg], {
                opacity:0,
                y: -20,
                duration:0.5,
                ease:"power1.inOut",
                stagger:{
                    amount:0.5
                }
            })
        
            // word highlight
            const highlight = gsap.timeline();
            highlight.from(highlightSection,{
                scrollTrigger:{
                    trigger: highlightSection,
                    start: "top top",
                    end:"bottom 10%",
                    pin:true,
                    lazy: false
                }
            })
            const splitSentence = document.querySelectorAll(".highlight");
            splitSentence.forEach((char,i)=>{
                const text = new SplitType(char, {types:'words'})

                highlight.from(text.words,{
                    scrollTrigger:{
                        trigger: char,
                        start: "top 40%",
                        end: "bottom top",
                        scrub:1,
                        lazy: false,
                        toggleActions: "play play resume reverse"
                    },
                    opacity: 0.15,
                    stagger: 0.4
                })
            })

            // year rolling            
            const counter = gsap.timeline();
            counter.to(".year",{
                innerText:currentYear-2002,
                duration:2,
                snap: "innerText"
            })
            ScrollTrigger.create({
                trigger: ".year",
                animation: counter,
                start: "top 80%",
                end: "bottom 15%",
                toggleActions: "play pause resume reset",
            });


        });
        return() => ctx.revert();
    },[])
    return(
        <>
            <Navbar className="relative"/> 
            <div className="overflow-x-clip">
            <section ref={el => {highlightSection=el}} className="bg-white text-black min-h-screen w-screen flex">
                <div className="grid grid-cols-3 items-center justify-center mx-auto md:px-20 px-10 lg:gap-x-8 gap-x-0 lg:gap-y-20 gap-y-0">
                        <h2 className="aboutme overflow-hidden col-span-3 font-semibold text-center ">A little about me</h2>

                    <div ref={el => {aboutPara=el}} className='highlight lg:col-span-2 col-span-3 self-start lg:leading-relaxed lg:text-4xl md:text-3xl md:leading-loose text-2xl lg:text-left text-center lg:order-1 order-2' > 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ante a augue pulvinar bibendum. Nulla facilisi. Sed enim felis, sagittis vel sagittis tincidunt, mollis sit amet mi. Fusce sed dictum nulla. 
                    </div>
                    <div className="lg:col-span-1 lg:self-start self-end justify-self-center col-span-3 lg:order-2 order-1">
                        <div ref={el => {aboutImg=el}} className="md:w-80 md:h-80 w-56 h-56">
                            <img alt="profile" className="rounded-full"/>
                        </div>
                    </div>
                </div>
                
            </section>
        
            <section className="bg-white text-black mx-auto min-h-screen w-screen items-center justify-center text-center flex flex-col lg:space-y-28 space-y-14 md:px-20 px-10">
                <div className='font-bold justify-self-center lg:text-5xl md:text-4xl text-3xl'>
                    My academic journey in the last <span className="year lg:text-6xl md:text-5xl text-4xl"> 0</span> years
                </div>
                <div className='intro lg:text-3xl md:text-xl text-lg md:leading-relaxed lg:leading-loose leading-loose'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ante a augue pulvinar bibendum. Nulla facilisi. Sed enim felis, sagittis vel sagittis tincidunt, mollis sit amet mi. Fusce sed dictum nulla. Donec diam est, elementum luctus elementum eget, ullamcorper id ipsum. Curabitur tortor libero, fringilla vel ante posuere, maximus finibus ex. Maecenas sem tellus, semper non ligula at, efficitur feugiat nibh.</div>
            </section>

            <section className="bg-white text-black mx-auto grid grid-cols-3 lg:h-[230vh] min-h-screen w-screen items-start md:px-32 px-20 lg:space-y-28  space-y-0">
                <div className="lg:sticky top-0 self-start lg:col-span-1 col-span-3 lg:pt-52 pt-32 lg:space-y-36">
                    <div className="md:text-3xl text-2xl font-semibold">If you are interested in...</div>

                    <div className="aboutLinks pt-30 md:space-y-12 text-2xl lg:block hidden">
                        <div ><Link to="/contact" className="hover:text-theme-g1-900 underline underline-offset-8 hover:underline-theme-g1-900"> Let's talk!</Link>
                        </div>
                        <div><Link to="/projects" className="hover:text-theme-g1-900 underline underline-offset-8 hover:underline-theme-g1-900">Check out my projects</Link></div>
                    </div>

                    <span className=" lg:flex lg:flex-row items-center hidden">
                        <a  href="https://www.linkedin.com" rel="noopener noreferrer">
                            <svg className="mr-3 md:h-8 md:w-8 h-6 w-6 text-gray-500 hover:text-theme-g1-900" viewBox="0 0 48 48">
                                <path
                                    d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                                    fill="currentColor"></path>
                            </svg>
                        </a>
                        <a href="https://github.com" rel="noopener noreferrer" class= "text-gray-500 hover:text-theme-g1-900">
                            <svg class="md:h-11 md:w-11 h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </span>
                    
                </div>
                

                
                <div className="lg:col-span-2 col-span-3 lg:pt-52">
                    <ul className="reveal lg:text-6xl md:text-4xl text-3xl font-black font-archivo lg:leading-loose md:leading-relaxed leading-relaxed text-nowrap">
                        <li className="list-item">Lorem ipsum</li>
                        <li className="list-item">Lorem ipsum</li>
                        <li className="list-item">Lorem ipsum</li>
                        <li className="list-item">Lorem ipsum</li>
                        <li className="list-item">Lorem ipsum</li>
                        <li className="list-item">Lorem ipsum</li>
                        <li className="list-item">Lorem ipsum</li>
                        <li className="list-item">Lorem ipsum</li>
                        <li className="list-item">Lorem ipsum</li>
                    </ul>
                </div>
                <div className="col-span-3 lg:hidden block space-y-8 text-xl underline underline-offset-8">
                    <div ><Link to="/contact"> Let's talk!</Link></div>
                    <div><Link to="/projects" className="">Check out my projects</Link></div>
                    <div className="flex flex-row items-center">
                    <a  rel="noopener noreferrer" href="https://www.linkedin.com" target="_blank">
                        <svg className="mr-3 h-6 w-6 text-gray-500 hover:text-theme-g1-900" viewBox="0 0 48 48">
                            <path
                                d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                    <a rel="noopener noreferrer" href="https://github.com" target="_blank" class= "text-gray-500 hover:text-theme-g1-900">
                        <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                    
                </div>
            </section>            
            </div>
        </>
    )
}

