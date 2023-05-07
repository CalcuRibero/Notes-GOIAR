import { TNote } from "../../utils/types";
import { RiDeleteBin6Line } from "react-icons/ri"

type TProps = {
    note: TNote
}

export const NoteCard = ({note}: TProps) => {
    return (
        <article 
            className="w-full grid grid-rows-4 gap-2 justify-center rounded-md bg-blue-600 text-white p-2"
        >
            <h2 className="text-lg font-bold mx-auto">
                {note.title}
            </h2>
            <p>{note.typeOfnote}</p>
            <p>
                {note.description}
            </p>
            <button className="bg-white flex border-none text-blue-600 hover:opacity-50 p-2 h-10 rounded-full mx-auto w-20 ease-out align-middle">
                <span>
                    <RiDeleteBin6Line className="mx-auto" />
                </span>
                <span>
                    Borrar
                </span>
            </button>
        </article>
    )
}