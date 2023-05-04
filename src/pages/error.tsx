import { Link } from "react-router-dom"

export const ErrorRoute = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl text-purple-700">
                OOPS
            </h1>
            <p className="text-green-500">
                Parece que esta página no existe...
            </p>
            <Link to="/" className="text-purple-700 border-b-2 border-purple-700">
                Volver a home
            </Link>
        </div>
    )
}