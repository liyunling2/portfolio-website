import {  useState, useEffect,  } from 'react';
import { categories, projects } from '../data/data.js';
import {images} from '../assets/assets.js';

export default function ProjectCards({showModal,chosenProj}){
    const [selectedOption, setSelectedOption] = useState('All');
    const [filteredProjs, setFilteredProjs] = useState(projects);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = ((project) => {
        showModal();
        chosenProj(project);
    })

    const handleOptionChange = ((selectedOption) => {
        setSelectedOption(selectedOption);
        setTimeout(setDropdown(!dropdown),5000)
    });

    useEffect(() => {
        const filtering = projects.filter((proj) => {
            if (selectedOption === "All" || selectedOption === undefined) {
                return projects;
            } else {
                return proj.cat.some((cat) => selectedOption === cat);
            }
        });
        setFilteredProjs(filtering);                
      }, [selectedOption]);        
            
    return(
        <>
        <div >

            <button className="bg-gray-800/60 text-gray-400 outline-none rounded-lg text-sm flex flex-row items-center focus:outline-2 focus:outline-theme-g2 hover:outline-theme-g2 py-2 px-3 gap-x-4 " type="button" onClick={()=>setDropdown(!dropdown)}>{selectedOption}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            <div id="dropdown" className={dropdown ? "z-10 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow absolute" : "hidden"}>
                <ul className="py-3 px-2 text-sm text-theme-w1" value={selectedOption}>
                {categories.map((category)=>
                    <li className="block px-4 py-2 active:bg-gray-900/80 hover:bg-gray-900/40 bg-gray-800/60 active:text-white hover:text-white text-gray-300" key={category} onClick={() => handleOptionChange(category)}>
                       {category}
                    </li>
                )}
               </ul>
            </div>

            <div className="mt-5 text-gray-500">Showing {filteredProjs.length} Projects</div>

            <div className=" mt-5 grid lg:grid-cols-2 gap-y-7 gap-x-7 items-start">
                {filteredProjs.map((proj) =>
                    <>
                    <div className="card relative" key={proj.id} onClick={()=>handleClick(proj.id)}>
                        <img className="rounded-lg max-h-64 w-full object-cover object-center hover:brightness-75 flex" 
                            src={images[proj.id]} alt="srcimg" />
                     
                        <div className="pt-5 pb-5" >
                            <div className="flex justify-between text-lg">
                                <span>  {proj.title} </span>
                                <span className="text-gray-600"> {proj.date} </span>
                            </div> 
                            <div className="mt-1 flex flex-wrap gap-x-2 gap-y-2 place-content-start ">
                                {proj.cat.map(cat=>
                                    <div className="border border-theme-g1-900/80 drop-shadow-md rounded-full py-1 px-2 text-theme-g1-900/80 text-xs min-w-max max-w-fit">{cat}</div>
                                )}           
                            </div>  
                        </div>
                    </div>
                    </>
                )}
               
            </div>  

        </div>
        </>
    )
}