import styles from "./SearchBar.module.css";


function SearchBar({onSearch}) {
   return (
      <div contenteditable class="board">
            <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}



export default SearchBar;