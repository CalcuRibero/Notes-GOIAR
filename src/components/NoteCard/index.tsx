import { RiDeleteBin6Line } from "react-icons/ri"

import { TNote } from "../../utils/types";
import { NotesStorage } from "../../services";

type TProps = {
    note: TNote
}

export const NoteCard = ({note}: TProps) => {

    const notesStorage = new NotesStorage();

    const handleEliminate = () => {
        notesStorage.deleteNoteById(note.id)
        window.location.reload()
    }

    return (
        <article 
            className="w-full grid grid-rows-3 gap-2 justify-center bg-yellow-400 p-2 h-96"
        >
            <h2 className="w-full flex justify-center text-lg font-bold">
                {note.title}
            </h2>
            <p className="w-full flex justify-center text-lg">
                {note.typeOfnote}
            </p>
            <p className="w-full flex justify-start px-2 border-gray-800">
                {note.description}
            </p>
            <button className="bg-transparent border border-black hover:bg-yellow-500 font-bold rounded-full transition-all duration-300 shadow-xl text-2xl flex align-middle w-44 mx-auto"
            onClick={handleEliminate}
            >
                <span className="p-2">
                    <RiDeleteBin6Line className="mx-auto" />
                </span>
                <span className="px-2 py-2 rounded-full transition-all duration-300 transform group-hover:opacity-100 group-hover:scale-100 text-lg">
                    Borrar Nota
                </span>
            </button>
        </article>
    )
}