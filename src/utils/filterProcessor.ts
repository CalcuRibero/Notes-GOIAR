import { TNote } from "./types";

export const filterByDate = (note: TNote, date?: string) => {
    if(!date) return note 
    const currentDate = new Date(date).toLocaleDateString()
    if( note.date === currentDate) return note
} 
 
export const filterByTitle = (note: TNote, title?: string) => {
    if(!title) return note
    if( note.title === title) return note
}

 
export const filterByType = (note: TNote, type?: string) => {
    if(!type) return note
    if( note.typeOfnote === type) return note
}