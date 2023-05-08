import * as React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { TNoteFilter } from "../../utils/types";

const TYPES_OF_NOTES = [
    "tareas de casa" , 
    "tareas del trabajo" ,
    "ideas nuevas" , 
    "diario personal"
]

export const FilterBar = () => {

    const [filter, setFilter] = useState<TNoteFilter>({} as TNoteFilter)
    const [_searchParams, setSearchParams] = useSearchParams()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        setSearchParams(filter)
    }   

    return (
        <header className="bg-yellow-400 h-12 mx-4 my-2 fixed z-40 shadow-2xl">
            <form action="" onSubmit={handleSubmit} className="grid grid-cols-4 gap-2 p-2">
                <input onChange={handleChange} type="text" className="bg-transparent border-b-2 border-black placeholder:text-black" placeholder="Título" name="title"/>
                <select onChange={handleChange} placeholder="Elija el tipo de nota" className="border-x-none border-b-2 border-black bg-transparent" name="typeOfnote" autoComplete="on">
                    <option className="text-gray-800" selected hidden disabled>Elija tipo de Nota</option>
                    {TYPES_OF_NOTES.map(
                        (itemType: string, index: number) => 
                            <option key ={index} value={itemType} className="capitalize">
                                {itemType}
                            </option>
                        )
                    }
                </select>
                <input onChange={handleChange} className="bg-transparent border-b-2 border-black placeholder:text-black" type="date" />
                <input type="submit" className="bg-transparent rounded-full border border-black placeholder:text-black hover:cursor-pointer hover:bg-yellow-500" value="Filtrar" />
            </form>
        </header>
    )
}