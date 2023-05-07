import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="text-xl flex justify-start bg-yellow-400 px-2 py-2">
            <Link to="/">
                <h1 className="grid grid-cols-2 gap-1">
                    <span>
                        Notes 
                    </span>
                    <span>
                        GOIAR
                    </span>
                </h1>
            </Link>
        </header>
    )
}