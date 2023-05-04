import { Outlet } from "react-router-dom"
import { Header, Sidebar } from "../components/index"

export const Root = () => {

    return (
        <>
            <Header/>
            <div className="grid grid-cols-5">
                <Sidebar className="grid col-span-1" />
                <article className="grid col-span-4">
                    <Outlet/>
                </article>
            </div>
        </>
    )
}