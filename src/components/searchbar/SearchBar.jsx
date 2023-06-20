import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({onSearch}) {

   const[id, setId] = useState('')

   function handleChange(evento){
      setId(evento.target.value)
   }
   return (
      <div contenteditable class="board">
            <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=> onSearch(id) }>Agregar</button>
      </div>
   );
}



export default SearchBar;