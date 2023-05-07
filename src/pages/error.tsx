import { Link } from "react-router-dom"
import "../routes/root.css"

export const ErrorRoute = () => {
    return (
        <div className="h-screen principal w-full flex flex-col justify-center items-center text-black">
            <h1 className="text-4xl">
                OOPS
            </h1>
            <p className="font-bold">
                Parece que esta página no existe...
            </p>
            <Link to="/" className="border-black hover:border-b-4 font-bold text-2xl">
                Volver a home
            </Link>
        </div>
    )
}