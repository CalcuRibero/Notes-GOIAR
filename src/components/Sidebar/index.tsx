import {
    Link,
} from "react-router-dom"

export const Sidebar = ({className = ""}: {className?: string}) => {
    return(
        <>
            <nav className={`bg-gray-400 h-screen w-full ${className}`}>
                <ul className="flex flex-col justify-start items-start px-2 gap-1">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/notes">Notes</Link>
                    </li>
                    <li>
                        <Link to="/about">Acerca de</Link> 
                    </li>
                </ul>
            </nav>       
        </>
    )
}