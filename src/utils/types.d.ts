export enum TypeOfNote { 
        "tareas de casa" , 
        "tareas del trabajo" ,
        "ideas nuevas" , 
        "diario personal"
    };

export type TNoteDTO = {
    title: string;
    typeOfnote: string;
    description: string;
}

export type TNote = TNoteDTO & {
    date: string;
    id: string;
}

export type TNoteFilter = {
    title: string;
    typeOfnote: string;
    date: string;
}

