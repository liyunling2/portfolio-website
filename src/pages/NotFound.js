import { Link } from "react-router-dom";


export default function NotFound(){
    return(
        <>
            <div className="container mx-auto min-h-screen flex flex-col items-center justify-center text-center"> 
                <h1 className="text-red-500"> {"{ Error }"}</h1>
                <tespanxt className="text mt-16"> You have found an Error 404</tespanxt>
                <span className='text-xl mt-12'>
                    Seems like the page you are looking for does not exist. Let's go back to the 
                    <Link to="/" className="text-theme-g1-900"> Homepage</Link>
                </span>
            </div>
        </>
    )
} 