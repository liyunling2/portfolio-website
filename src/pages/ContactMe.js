
import React, { useRef } from 'react';
import Navbar from "../components/Navbar";
import { useLayoutEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import gsap from 'gsap';

export default function ContactMe(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('###', '###', form.current, {
            publicKey: '###',
        })
        .then(
            () => {
            toast.success("Your email has been sent!");
            document.getElementsByTagName('form')[0].reset();
            },
            (error) => {
                toast.error("Oh no, the email failed to send, please try again!")
            },
        );
    };

    useLayoutEffect(()=>{
        let ctx = gsap.context(() => {
            gsap.from(".header, .body", {
                opacity:0,
                y: -20,
                duration:1,
                ease:"power1.inOut",
                stagger:{
                    amount:0.05
                }
            })
        });
        return() => ctx.revert();
    },[])

    return(
        <>
            <Navbar/>
            <div className="header container mx-auto h-5/6 min-w-screen flex flex-col text-center items-center md:pt-52 pt-40">
                <h1> {"Get In Touch"}</h1>

                <div className='body grid grid-cols-6 md:mt-20 mt-10 gap-x-10 gap-y-5 justify-center'>
                    <div className='col-span-6 md:col-span-3 flex-col content-center text-center md:text-start'>
                
                        <span className='text lg:text-4xl lg:leading-relaxed leading-normal'> Reach out to me! Always down for a chat.</span>
                        <div className='flex flex-row space-x-2 items-center md:pt-8 pt-3 md:justify-start justify-center '>
                            <a  href="https://www.linkedin.com" rel="noopener noreferrer">
                            <svg class="h-7 w-7  text-gray-500 hover:text-theme-g1-900" viewBox="0 0 48 48">
                                <path
                                    d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                                    fill="currentColor"></path>
                            </svg>
                            </a>

                            <a href="https://github.com" rel="noopener noreferrer">
                                <svg class="h-10 w-10 text-gray-500 hover:text-theme-g1-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className='col-span-6 md:col-span-3 text-center md:text-start'>
                        
                        <form ref={form} onSubmit={sendEmail} className="w-full md:min-w-10 ">
                            <div class="mb-5 grid grid-cols-3 gap-x-4">
                                <input type="text" name="name" className="col-span-1 bg-gray-800/40  text-gray-200 text-sm md:text-base rounded-lg outline-none focus:outline-2 focus:outline-theme-g2 block p-1.5 w-full drop-shadow-lg" placeholder="name*" required />
                                <input type="email" name="email" className="col-span-2 bg-gray-800/40   text-gray-200 text-sm md:text-base rounded-lg outline-none focus:outline-2 focus:outline-theme-g2 block w-full p-1.5 drop-shadow-lg" placeholder="email@gmail.com*" required />
                            </div>
                      
                            <div class="mb-5">
                                <textarea rows="8" name="msg" className="bg-gray-800/40  text-gray-200 text-sm md:text-base rounded-lg outline-none focus:outline-2 focus:outline-theme-g2 block w-full p-1.5 drop-shadow-lg" placeholder="Email me a message* and I will get back to you asap :)" required />
                            </div>

                            <button type="submit" className="border-2 border-theme-g1-900 px-5 py-1 text-theme-g1-900 text-sm md:text-base rounded-lg hover:text-gray-800 hover:font-semibold hover:bg-theme-g1-900">Send</button>
                        </form>
                    </div>
                    
                </div>
            </div>

            <Toaster 
                position="bottom-right" 
                reverseOrder={false}
                toastOptions={{
                success:{
                    style:{
                    color:'#46ec5f',
                    background: "#0f172a"
                    }
                },
                error:{
                    style:{
                    color:'#ef4444',
                    background: "#03131b"
                    }
                }
                }}
            />
        </>
    )
}