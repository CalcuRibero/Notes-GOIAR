import { useState } from "react";

import { NotesStorage } from "../../services";
import { TNoteDTO, TypeOfNote } from "../../utils/types";

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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }   

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        notesStorage.createNote(formValues)
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            className="grid grid-rows-5 gap-2 p-2 bg-yellow-400 h-96 w-80 fixed top-1/4 left-1/2 shadow-xl"
        >
            <h1 className="text-xl flex justify-center">Agregar nueva nota</h1>
            <div className="flex flex-col">
                <label htmlFor="">Título</label>
                <input className="border border-black bg-transparent" type="text" onChange={handleChange} name="title"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Tipo de Nota</label>
                <select className="border border-black bg-transparent" onChange={handleChange} name="typeOfnote" autoComplete="on">
                    <option selected hidden disabled></option>
                    {TYPES_OF_NOTES.map(
                        (itemType: string, index: number) => 
                            <option key ={index} value={itemType} className="capitalize">
                                {itemType}
                            </option>
                        )
                    }
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Descripción</label>
                <textarea className="border border-black bg-transparent h-24 align-top" onChange={handleChange} name="description"/>
            </div>
            <input 
                type="submit" 
                value="Agregar Nota" 
                className="bg-white text-blue-600 rounded-md shadow-xl h-12"
            />
        </form>
    ) 
}