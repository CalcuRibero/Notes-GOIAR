import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdNotes } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import {
    Link,
} from "react-router-dom"

export const Sidebar = ({className = ""}: {className?: string}) => {
    return(
        <>
            <nav className={`bg-yellow-300 text-lg shadow-inner min-h-screen w-full ${className}`}>
                <ul className="flex flex-col justify-start items-start pt-4 fixed top-24 left-10">
                    <Link to="/" className="w-full">
                        <li className="hover:border-b-2 hover:border-black w-full py-2 flex flex-row gap-4">
                            <span>
                                <BsFillHouseDoorFill/>
                            </span>
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link to="/notes" className="w-full">
                        <li className="hover:border-b-2 hover:border-black w-full py-2 flex flex-row gap-4">
                                <span>
                                    <GrNotes />
                                </span>
                                <span>Notes</span>
                        </li>
                    </Link>
                    <Link to="/about" className="w-full">
                        <li className="hover:border-b-2 hover:border-black w-full py-2 flex flex-row gap-4">
                                <span>
                                    <MdNotes />
                                </span>
                                <span>Acerca de</span>
                        </li>
                    </Link> 
                </ul>
            </nav>       
        </>
    )
}