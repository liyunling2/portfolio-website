
import { NavLink } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Navbar(){
    let menu = useRef(null);
    const [menuState, setmenuState] = useState({clicked: false, initial: true});
    const handleMenu = () => {
        setmenuState({clicked:!menuState.clicked, initial: false});
    };
    
    useEffect(()=>{
        if(menuState.clicked){
            menu.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }, [menuState])
    let navlinks = useRef();

    useLayoutEffect(()=> {
        let ctx = gsap.context(() => {
                       
            if(menuState.clicked ){
                gsap.from([menu, navlinks],{
                    height:0,
                    opacity:0,
                    duration: 0.7,
                    ease: "power3.inOut",
                    stagger:{
                        amount:0.1
                    }
                })
            }else if((menuState.clicked === false && menuState.initial === false)){
                document.body.style.overflow = "auto";
                gsap.to([navlinks,menu],{
                    duration:0.8,
                    height:0,
                    autoAlpha: 0,
                    ease: "power3.inOut",
                    stagger:{
                        amount:0.05
                    }
                })
            }else if(menuState.initial === true){
                document.body.style.overflow = "auto";
                gsap.to([navlinks,menu],{
                    duration:0,
                    height:0,
                    autoAlpha: 0
                })
            }
        });
        return() => ctx.revert();
    }, [menuState])



    return(
        <>
            <div className='fixed w-screen flex flex-col z-40'>
                <div  className="z-40 flex lg:pt-14 lg:px-14 md:pt-10 md:px-10 pt-8 px-8 justify-between text-2xl min-h-10">
                        <NavLink to="/">
                            <img alt="logo" width="45" />
                        </NavLink>
                        <button onClick={handleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                            <g fill="#334155" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path></g></g>
                            </svg>
                        </button>
                </div>
           
                <div ref={el => {menu=el}} className="menu flex-col fixed bg-theme-g1-900 w-full h-screen gap-y-20 z-30" >
                    <div ref={el => {navlinks=el}} className='container flex flex-col mx-auto lg:pt-40 pt-36 justify-center items-center lg:text-8xl/tight md:text-7xl/normal text-5xl/normal tracking-widest font-archivo font-black gap-y-11 '>
                        <NavLink to="/" className={({isActive}) => { return isActive ? 'text-theme-g2' : 'hover:text-theme-g2'}} 
                        disabled={({isActive})=> {return isActive ? true : false}}
                        > Homepage </NavLink>

                        <NavLink to="/aboutme" className={({isActive}) => { return isActive ? 'disabled text-theme-g2' : 'hover:text-theme-g2'}} disabled={({isActive})=> {return isActive ? true : false}} > About</NavLink>

                        <NavLink to="/projects" className={({isActive}) => { return isActive ? 'text-theme-g2' : 'hover:text-theme-g2'}} disabled={({isActive})=> {return isActive ? true : false}} > Projects</NavLink>

                        <NavLink to="/contact" className={({isActive}) => { return isActive ? 'text-theme-g2' : 'hover:text-theme-g2'}} disabled={({isActive})=> {return isActive ? true : false}} > Contact</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}
