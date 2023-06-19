import styles from "./SearchBar.module.css";


function SearchBar({onSearch}) {
   return (
      <div className={styles.container}>
            <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}



export default SearchBar;