import ProjectCards from "../components/ProjectCards";
import Navbar from "../components/Navbar";
import ProjectModal from "../components/ProjectModal";
import { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

export default function Project(){
    let [modalState, setModalState] = useState(false);
    let [projectModal, setProjectModal] = useState('');

    const handleProjectModal = ((project)=>{
        setProjectModal(project)
    })
    
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

        <div className="relative">
            <ProjectModal 
                isActive={modalState === true}
                proj= {projectModal}
                showModal = {()=>setModalState(!modalState)}
            />

            <div className=" min-h-max max-w-screen">
                
                <Navbar className="absolute"/>
                <div className="header container mx-auto flex flex-col text-center items-center justify-center md:pt-52 pt-40">
                    <h1>{"Projects"}</h1>
                    <span className="text lg:mt-12 mt-8 text-gray-500">Display projects.</span>
                    <hr className="h-1 w-full mt-5 border-gray-800"/>               
        
                </div>

                <div className="body z-10 mt-5 mb-10 container mx-auto flex flex-col items-center justify-center">
                    <ProjectCards
                        showModal = {()=>setModalState(!modalState)}
                        chosenProj= {handleProjectModal}
                    />
                </div>


            </div>
        </div>
        </>
    )
}