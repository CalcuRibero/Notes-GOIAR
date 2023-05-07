import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { NotesStorage } from "../../services";
import { TNoteDTO } from "../../utils/types";

const formValuesInit = {
    title: "",
    typeOfnote: "",
    description: "",
}

const TYPES_OF_NOTES = [
    "tareas de casa" , 
    "tareas del trabajo" ,
    "ideas nuevas" , 
    "diario personal"
]

export const AddNotes = () => {
    const [formValues, setFormValues] = useState<TNoteDTO>(formValuesInit)

    const notesStorage = new NotesStorage();
    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }   

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if(Object.values(formValues).some((value) => value === ""))
        {
            alert("No completó el formulario correctamente")
            return
        } 
        notesStorage.createNote(formValues)
        navigate("/notes", {replace: true})
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            className="grid grid-rows-6 gap-2 p-2 bg-yellow-400 h-96 w-96 fixed top-1/4 left-1/2 shadow-xl"
        >
            <h1 className="text-xl flex justify-center">Agregar nueva nota</h1>
            <div className="flex flex-col">
                <label htmlFor="">Título</label>
                <input placeholder="Ingrese el título" className="border-x-none border-b-2 border-black bg-transparent placeholder:text-gray-800" type="text" onChange={handleChange} name="title"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Tipo de Nota</label>
                <select placeholder="Elija el tipo de nota" className="border-x-none border-b-2 border-black bg-transparent" onChange={handleChange} name="typeOfnote" autoComplete="on">
                    <option className="text-gray-800" selected hidden disabled>Elija tipo de Nota</option>
                    {TYPES_OF_NOTES.map(
                        (itemType: string, index: number) => 
                            <option key ={index} value={itemType} className="capitalize">
                                {itemType}
                            </option>
                        )
                    }
                </select>
            </div>
            <div className="flex flex-col row-span-2">
                <label htmlFor="">Descripción</label>
                <textarea placeholder="Ingrese su descripción" className="border-x-none border-b-2 border-black bg-transparent h-24 align-top placeholder:text-gray-800" onChange={handleChange} name="description"/>
            </div>
            <input 
                type="submit" 
                value="Agregar Nota" 
                className="hover:cursor-pointer hover:bg-yellow-500 hover: translate-x-1 border border-black bg-transparent h-12 transition-all"
            />
        </form>
    ) 
}