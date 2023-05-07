import { useState, useEffect } from "react"
import { NotesStorage } from "../../services"
import { TNote } from "../../utils/types"
import { NoteCard } from "../../components/NoteCard"

export const Notes = () => {
    const [notes, setNotes] = useState<TNote[]>([])
    
    const NotesInstance = new NotesStorage()

    useEffect(() => 
        {
            setNotes(NotesInstance.getAllNotes());
        }
    , [])

    return (
        <section className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-2">
            {notes.length ? 
                notes.map((note: TNote) => <NoteCard note={note} />)
                : 
                <article className="w-full flex justify-center align-middle lg:col-span-3">
                    <h2 className="text-xl text-blue-600"> 
                        No hay notas guardadadas por el momento...
                    </h2>
                </article>
            }
        </section>
    )
}