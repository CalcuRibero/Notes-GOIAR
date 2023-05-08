import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { NotesStorage } from "../../services"
import { TNote } from "../../utils/types"
import { NoteCard } from "../../components/NoteCard"
import { FilterBar } from "../../components/FilterBar"

export const Notes = () => {
    const [notes, setNotes] = useState<TNote[]>([])
    const [searchParams, _setSearchParams] = useSearchParams()
    
    const NotesInstance = new NotesStorage()

    useEffect(() => 
        {
            console.log(searchParams.values())
            setNotes(NotesInstance.getAllNotes());
        }
    , [])

    return (
        <>
            <FilterBar />
            <section className="p-4">
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {notes.length ? 
                        notes.map((note: TNote) => <NoteCard key={note.id} note={note} /> ):   
                        <article className="w-full flex justify-center align-middle lg:col-span-3">
                            <h2 className="text-3xl font-bold bg-yellow-400 border-2 border-black px-2 h-12"> 
                                No hay notas guardadadas por el momento...
                            </h2>
                        </article>
                    }
                </div>
            </section>
        </>
    )
}