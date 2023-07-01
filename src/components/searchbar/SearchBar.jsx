import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({onSearch}) {

   const[id, setId] = useState('')

   function handleChange(evento){
      setId(evento.target.value)
   }
   return (
      <div contenteditable class="input-icon" viewBox="0 0 20 20" fill="currentColor">
         <button onClick={()=>onSearch(id)  }>Search</button>
            <path fill-rule="evenodd" d="" clip-rule="evenodd" />
            <input type='sumbit' onChange={handleChange} placeholder="Ingresa un ID" value={id}/>
      </div>
      
   );
}



export default SearchBar;