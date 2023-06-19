import React from 'react';
import SearchBar from "../searchbar/SearchBar";
import styles from "./Nav.module.css";


function Nav(props){
   console.log(props)
    return(
       <div className={styles.container}>
         <div className='App'>
            <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
         </div>
       </div>
    )
}



export default Nav;