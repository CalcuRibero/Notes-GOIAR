import { AiOutlineFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const AddButton = () => {
    const navigate = useNavigate()
    
    const handleButton = () => {
        navigate("/create-note")
    } 
    return (
        <button 
            className="bg-yellow-400 hover:bg-yellow-500 font-bold py-2 px-2 rounded-full transition-all duration-300 fixed bottom-6 right-12 z-20 shadow-xl text-2xl flex align-middle border border-black" 
            onClick={handleButton}
        >
            <span className="flex flex-col justify-center">
                <AiOutlineFileAdd className="text-black"/>
            </span>
            <span className="px-2 py-2 rounded-full transition-all duration-300 transform group-hover:opacity-100 group-hover:scale-100 text-lg">
                Agregar Nota
            </span>
        </button>

    )
}