import { RiDeleteBin6Line } from "react-icons/ri"

import { TNote } from "../../utils/types";
import { NotesStorage } from "../../services";
import { formatDescription, formatDate } from "../../utils/formatters";

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
            className="w-full grid grid-rows-7 gap-2 justify-center bg-yellow-400 p-2 min-h-96"
        >
            <p className="w-full flex justify-end text-gray-800">{formatDate(note.date)}</p>
            <h2 className="w-full flex justify-center text-lg font-bold border border-black p-2">
                {note.title}
            </h2>
            <p className="w-full flex justify-center text-lg capitalize">
                {note.typeOfnote}
            </p>
            <div className="w-full border-y border-black  row-span-4">
                <p className="w-full flex justify-start text-xs px-2 text-ellipsis">
                    {`Descripción: ${formatDescription(note.description)}`}
                </p>
            </div>
            <button className="bg-transparent h-12 border border-black hover:bg-yellow-500 font-bold rounded-full transition-all duration-300 shadow-xl text-2xl flex align-middle w-44 mx-auto"
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