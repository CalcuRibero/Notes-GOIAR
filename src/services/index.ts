import { TNote, TNoteDTO, TNoteFilter } from "../utils/types"; 

export class NotesStorage {
    storage: Storage;

    constructor() {
        this.storage = localStorage;
    }
    
    getAllNotes (params?: TNoteFilter): TNote[] {
        const notes: TNote[] = JSON.parse(this.storage.getItem("Notes") || "[]")
        if (!params) return notes
        const filteredNotes = notes.filter((note: TNote) => 
            note.title === params.title 
        )
        return filteredNotes

    }

    getOneNoteById (id: string): TNote {
        const notes = this.getAllNotes()
        const note = notes.find((note: TNote) => note.id === id) 
        if(!note) throw new Error("Esta nota no existe")
        return note
    }

    createNote (body: TNoteDTO) {
        const currentNotes = this.getAllNotes();
        const newId = Date.now().toString();
        const newDate = new Date().toString()
        const note = {
            ...body,
            id: newId,
            date: newDate
        }
        const notes: TNote[] = [
            ...currentNotes,
            note
        ];
        const formattedNotes = JSON.stringify(notes);  
        
        this.storage.setItem("Notes", formattedNotes); 
    }

    editNote (id: string, body: TNoteDTO) {
        const currentNotes = this.getAllNotes();
        const notes = currentNotes.map((note:TNote) => {
                if(note.id === id) {
                    note.title = body.title
                    note.description = body.description
                    note.typeOfnote = body.typeOfnote                   
                }
            } 
        );
        const formattedNotes = JSON.stringify(notes);
        this.storage.setItem("Notes", formattedNotes); 
    }

    deleteNoteById (id: string) {
        const currentNotes = this.getAllNotes();
        const notes = currentNotes.filter((note:TNote) => note.id !== id );
        const formattedNotes = JSON.stringify(notes);  

        this.storage.setItem("Notes", formattedNotes);
    }
}