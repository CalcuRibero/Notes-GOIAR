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
                <ul className="flex flex-col justify-start items-start px-2">
                    <Link to="/" className="w-full">
                        <li className="hover:border-b hover:border-black hover:bg-yellow-500 w-full py-2 flex align-middle">
                            <BsFillHouseDoorFill/>
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link to="/notes" className="w-full">
                        <li className="hover:border-b hover:border-black hover:bg-yellow-500 w-full py-2 flex align-middle">
                                <GrNotes />
                                <span>Notes</span>
                        </li>
                    </Link>
                    <Link to="/about" className="w-full">
                        <li className="hover:border-b hover:border-black hover:bg-yellow-500 w-full py-2 flex align-middle">
                                <MdNotes />
                                <span>Acerca de</span>
                        </li>
                    </Link> 
                </ul>
            </nav>       
        </>
    )
}