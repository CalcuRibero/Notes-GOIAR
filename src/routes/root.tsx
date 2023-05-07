import { Outlet } from "react-router-dom"
import { AddButton, Header, Sidebar } from "../components/index"
import "./root.css" 

export const Root = () => {

    return (
        <>
            <Header/>
            <div className="grid grid-cols-5">
                <Sidebar className="grid col-span-1" />
                <article className="grid col-span-4 principal">
                    <Outlet/>
                </article>
                <AddButton />
            </div>
        </>
    )
}